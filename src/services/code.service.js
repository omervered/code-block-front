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

async function getById(codeBlockId) {
  return httpService.get(`${BASE_URL}${codeBlockId}`);
}

async function remove(codeBlockId) {
  return httpService.delete(`${BASE_URL}/${codeBlockId}`);
}

async function save(codeBlock) {
  if (codeBlock._id) {
    return httpService.put(`${BASE_URL}/${codeBlock._id}`, codeBlock);
  } else {
    return httpService.post(BASE_URL, codeBlock);
  }
}
