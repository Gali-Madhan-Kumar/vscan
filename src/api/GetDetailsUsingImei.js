import { api } from "./baseUrl";

export const GetDetailsUsingImei = async (imei) => {
  const result = await api.get(`/jobcard/getJobcardMapByIMEI/${imei}`);
  return result.data;
};

export const getVscanDetails = async (imei) => {
  // const options = {
  //   headers: {
  //     "X-Vehito-Auth-Token":
  //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5NjMyNjQyMTA1MTUwMzM5NTUyNTA1NCIsImlzcyI6InZlaGl0by5jb20iLCJ1c2VydHlwZSI6IlZlbmRvciJ9.TQYwcuUbCOFJLWp-qRm89rSjkDXZia9wX0H7gheJY7c",
  //   },
  // };
  const result = await api.get(
    `/vscan/get/vScanReport/latestByImei/${imei}`,
    // options
  );
  return result.data;
};
