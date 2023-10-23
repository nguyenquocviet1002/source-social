import http from './http';

export const getBrandFn = async (token) => {
  return await http.get(`/get-brand?token=${token}`);
};

export const getReportBrandFn = async (body) => {
  return await http.get(
    `get-report-brand?token=${body.token}&start_date=${body.start_date}&end_date=${body.end_date}&user_seeding=${body.user}`,
  );
};
export const getCheckDataFn = async (body) => {
  return await http.get(
    `get-check-seeding?token=${body.token}&start_date=${body.start_date}&end_date=${body.end_date}&phone=${body.phone}&user_seeding=${body.user_seeding}`,
  );
};
