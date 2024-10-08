const host = "http://localhost:5000";
export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/api/auth/login`;
export const registerlawyerRoute = `${host}/api/authlawyer/registerlawyer`;
export const loginlawyerRoute = `${host}/api/authlawyer/loginlawyer`;
export const registercasemanagerRoute = `${host}/api/authcasemanager/registercasemanager`;
export const logincasemanagerRoute = `${host}/api/authcasemanager/logincasemanager`;
export const fetchalldetailscasemanagerRoute = `${host}/api/authcasemanager/fetchallemployees`;
export const fetchadmin = `${host}/api/authcasemanager/fetchadmin`;
export const updatedetailscasemanagerRoute = `${host}/api/authcasemanager/updatecasemanager/`;
export const countLawyerRoute = `${host}/api/authlawyer/fetchdatalawyer`;
export const updateLawyerRoute = `${host}/api/authlawyer/updatelawyer/`;
export const countApplicantRoute = `${host}/api/auth/fetchdetails`;
export const updateApplicantRoute = `${host}/api/auth/updateapplicant/`;
export const registerCaseRoute = `${host}/api/authcase/registercase`;
export const countandfetchCaseRoute = `${host}/api/authcase/countandfetchcases`;
export const AddcaseStatus = `${host}/api/authcase/addcasestatus`;
export const Addjudge = `${host}/api/authcase/addjudge`;
export const Addcourt = `${host}/api/authcase/addcourt`;
export const Addcomments = `${host}/api/authcase/addcomments`;
export const uploadFile = `${host}/api/casefiles/upload`;
export const fetchFile = `${host}/api/casefiles/fetchdocuments`;
export const downloadFile = `${host}/api/casefiles/download`;
export const deleteFile = `${host}/api/casefiles/deletefile`;
export const updateFile = `${host}/api/casefiles/updatefile`;
export const uploadFilecasemanager = `${host}/api/casefiles/uploadcasemanager`;
export const fetchFilecasemanager = `${host}/api/casefiles/fetchdocumentscasemanager`;
export const downloadFilecasemanager = `${host}/api/casefiles/downloadcasemanager`;
export const deleteFilecasemanager = `${host}/api/casefiles/deletefilecasemanager`;
export const updateFilecasemanager = `${host}/api/casefiles/updatefilecasemanager`;
export const updatedateRoute = `${host}/api/authcase/updatehearningdate`;
export const fetchlawyercasesRoute = `${host}/api/authcase/lawyerscases`;
export const lawyercasestatusRoute = `${host}/api/authcase/lawyercasestatus`;
export const lawyerwritearticleRoute = `${host}/api/article/addarticle`;
export const lawyerviewarticleRoute = `${host}/api/article/viewarticle`;
export const lawyerdeletearticleRoute = `${host}/api/article/deletearticle/`;
export const lawyerfindOneArticleRoute = `${host}/api/article/findarticle/`;
export const lawyerupdatearticleRoute = `${host}/api/article/updatearticle/`;
export const registerCasebyApplicantRoute = `${host}/api/authcase/addcasebyapplicant`;
export const fetchApplicantcasesRoute = `${host}/api/authcase/fetchcasebyapplicant`;
export const AddComplainRoute = `${host}/api/complain/addcomplain`;
export const SendMailRoute = `${host}/api/mailauth/sendmail`;



