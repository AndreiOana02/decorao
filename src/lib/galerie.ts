import fs from 'node:fs';
import path from 'node:path';

export type GalerieItem = {
  src: string;
  title: string;
  fit?: 'cover' | 'contain';
};

const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;

const ROOM_IDS = ['bucatarii', 'dormitor', 'baie', 'living', 'usi', 'scari'] as const;
export type RoomId = (typeof ROOM_IDS)[number];

function titleFromFilename(name: string): string {
  const base = name.replace(IMAGE_EXT, '');
  return base
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

type CaptionEntry = { title: string; fit?: 'cover' | 'contain' };

function loadCaptions(): Record<string, CaptionEntry> {
  const captionsPath = path.join(process.cwd(), 'src', 'data', 'galerie.json');
  if (!fs.existsSync(captionsPath)) return {};
  try {
    const raw = JSON.parse(fs.readFileSync(captionsPath, 'utf-8')) as
      | { file: string; title: string; fit?: 'cover' | 'contain' }[]
      | Record<string, string>;
    if (Array.isArray(raw)) {
      const map: Record<string, CaptionEntry> = {};
      for (const item of raw) {
        map[item.file] = { title: item.title, fit: item.fit };
      }
      return map;
    }
    const map: Record<string, CaptionEntry> = {};
    for (const [file, title] of Object.entries(raw)) {
      map[file] = { title };
    }
    return map;
  } catch {
    return {};
  }
}

function listImagesInDir(
  dir: string,
  urlPrefix: string,
  captions: Record<string, CaptionEntry>
): GalerieItem[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => IMAGE_EXT.test(f))
    .sort((a, b) => a.localeCompare(b, 'ro'))
    .map((file) => {
      const key = urlPrefix ? `${urlPrefix}/${file}` : file;
      const meta = captions[key] ?? captions[file];
      return {
        src: `/galerie/${key}`,
        title: meta?.title ?? titleFromFilename(file),
        fit: meta?.fit,
      };
    });
}

export function getGalerieForRoom(roomId: string): GalerieItem[] {
  const captions = loadCaptions();
  const roomDir = path.join(process.cwd(), 'public', 'galerie', roomId);
  return listImagesInDir(roomDir, roomId, captions);
}

export function getGalerieByRoom(): Record<RoomId, GalerieItem[]> {
  const result = {} as Record<RoomId, GalerieItem[]>;
  for (const id of ROOM_IDS) {
    result[id] = getGalerieForRoom(id);
  }
  return result;
}

/** Toate imaginile din fiecare categorie, în ordinea secțiunilor — carusel hero */
export function getHeroSlides(roomIds: readonly string[]): GalerieItem[] {
  const byRoom = getGalerieByRoom();
  const slides: GalerieItem[] = [];
  for (const id of roomIds) {
    if (!ROOM_IDS.includes(id as RoomId)) continue;
    const items = byRoom[id as RoomId];
    if (items?.length) slides.push(...items);
  }
  return slides;
}
