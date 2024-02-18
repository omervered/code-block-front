import { httpService } from "./http.service";

const BASE_URL = "code-blocks/";

export const codeService = {
  query,
  getById,
  remove,
  save,
};

async function query() {
  return httpService.get(BASE_URL);
}

async function getById(id) {
  return httpService.get(`${BASE_URL}/${id}`);
}

async function remove(id) {
  return httpService.delete(`${BASE_URL}/${id}`);
}

async function save(codeBlock) {
  if (codeBlock._id) {
    return httpService.put(`${BASE_URL}/${codeBlock._id}`, codeBlock);
  } else {
    return httpService.post(BASE_URL, codeBlock);
  }
}
