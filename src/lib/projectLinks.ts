import type {Project} from '../data/experience';

export function linkCount(project: Project) {
  return [project.url, project.appStore, project.playStore, project.telegram].filter(Boolean)
    .length;
}

export function singleLink(project: Project) {
  return project.url ?? project.appStore ?? project.playStore ?? project.telegram ?? '#';
}
