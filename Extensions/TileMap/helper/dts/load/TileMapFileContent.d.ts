import { LDtkTileMap } from '../load/ldtk/LDtkFormat';
import { TiledTileMap } from '../load/tiled/TiledFormat';
export declare type TileMapFileContent =
  | {
      kind: 'tiled';
      data: TiledTileMap;
    }
  | {
      kind: 'ldtk';
      data: LDtkTileMap;
    };
//# sourceMappingURL=TileMapFileContent.d.ts.map
