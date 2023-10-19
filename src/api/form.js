import http from './http';

export const getFormFn = async (body) => {
  return await http.get(
    `/get-form?token=${body.token}&brand_id=${body.brand_id}&type=${body.type}&limit=${body.limit}&offset=${body.offset}&company_id=${body.company_id}&name_fb=${body.name_fb}&phone=${body.phone}&service=${body.service}&name=${body.name}&start_date=${body.start_date}&end_date=${body.end_date}&user_seeding=${body.user_seeding}`,
  );
};

export const createFormFn = async (body) => {
  return await http.get(
    `/create-form?token=${body.token}&name=${body.name}&phone=${body.phone}&link_fb=${body.link_fb}&name_fb=${body.name_fb}&service=${body.service}&note=${body.note}&script=${body.script}&interactive_proof=${body.interactive_proof}&company_id=${body.company_id}&type=${body.type}&code_utm_source=${body.code_utm_source}`,
  );
};

export const updateFormFn = async (body) => {
  return await http.get(
    `/update-form?token=${body.token}&code_form=${body.code_form}&name=${body.name}&phone=${body.phone}&link_fb=${body.link_fb}&name_fb=${body.name_fb}&service=${body.service}&note=${body.note}&script=${body.script}&interactive_proof=${body.interactive_proof}&company_id=${body.company_id}&type=${body.type}&seeding_user_id=${body.seeding_user_id}&ctv_user_id=${body.ctv_user_id}&brand=${body.brand}`,
  );
};

export const removeFormFn = async (body) => {
  return await http.get(`/remove-form?token=${body.token}&code_form=${body.code_form}`);
};

export const getCompanyFn = async (token) => {
  return await http.get(`/get-company?token=${token}`);
};

export const getSourceFn = async (token) => {
  return await http.get(`/get-utm-source?token=${token}`);
};
