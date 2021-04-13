import projects from "../apis/projects";
import { FETCH_PROJECTS, FETCH_PROJECT } from "./types";

export const fetchProjects = () => async (dispatch) => {
  const response = await projects.get("/projects");

  dispatch({ type: FETCH_PROJECTS, payload: response.data });
};

export const fetchProject = (id) => async (dispatch) => {
  const response = await projects.get(`/projects/${id}`);

  dispatch({ type: FETCH_PROJECT, payload: response.data });
};
