// src/types/project-data-full.ts

import { IconType } from "react-icons";
export interface ProjectDataFull {
  id: number;
  img: string;
  title: string;
  desc: string;
  icons: IconType[];
  demo: string;
  github: string;
  category: string;
}
