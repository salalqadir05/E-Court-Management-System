import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { countandfetchCaseRoute,Addjudge } from '../../utlis/APIRoutes';
import axios from 'axios';
import AlertSuccess from '../Alerts/AlertSuccess';
import AlertFailed from '../Alerts/AlertFailed';

function Assignjudge() {
  const [CasesList, setCasesList] = useState([])
  const [alertSuccess, setalert] = useState(false)
  const [alertFailed, setalertFailed] = useState(false)
  const [Judgename,setjudgename] = useState({
    judgename : ""
  })
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.post(countandfetchCaseRoute);
        setCasesList(response.data.CasesList);
          } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchdata();
  }, []);
  const handleChange = (e) => {
    setjudgename({ ...Judgename, [e.target.name]: e.target.value });
}

  const   handleAccept = async(caseid)=>{
    const Approve = Judgename.judgename
    console.log(Approve)
    try {
     const response = await axios.put(Addjudge, {
        caseId: caseid,
        judgename: Approve
      });
      setalert(true)
      console.log("PUT request successful",response.data.updateCasejudgename.judgenames);
      
    } catch (error) {
      console.error("Error in PUT request:", error);
    }
    }
  
  

  
  
  return (
    <>

    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Cases List</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/managementpanel">Home</Link>
                </li>
                <li className="breadcrumb-item active">Cases List</li>
              </ol>
            </div>
          </div>
        </div>
        </section>
    {alertSuccess &&  <AlertSuccess msg="Judge is assigned Succesfully to this Case" /> }

    {alertFailed && <AlertFailed />}
    <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="invoice p-3 mb-3">
                <div className="row">
                
                  <div  className="col-12 table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Qty</th>
                          <th>Case Name</th>
                          <th>Case Number</th>
                          <th>Lawyer Name</th>
                          <th>Case Status</th>
                          <th>Case Updation</th>

                        </tr>
                      </thead>
                      <tbody>
                      {CasesList.map( (caseItem,index)=>(
                      
                      <tr key={index} >
                          <td>{index + 1}</td>
                          <td>{caseItem.Case_Type}</td>
                          <td>{caseItem.CaseNumber}</td>
                          <td>{caseItem.Lawyer_Name}</td>
                          <td> {caseItem.Case_Status === "Status Pending" || caseItem.Case_Status=== 'Rejected' ? (
                                      <span className="badge text-bg-danger">{caseItem.Case_Status}</span>
                                    ) : (
                                      <span className="badge text-bg-success">{caseItem.Case_Status}</span>
                                    )}</td>

                          <td>
                          {caseItem.Case_Status !== 'Rejected' && (
                            <div className="d-flex flex-direction-row">
          
                          <div className='ml-1 mt-1'>
      <button
        type="button"
        className={`btn btn-info${caseItem.Case_Status === 'Rejected'  || caseItem.Case_Status === 'Status Pending'  ? ' d-none' : ''}`}
        data-bs-toggle={`modal`} 
        data-bs-target={`#approveModal-${caseItem._id}`}
      >
        Assign a Judge
      </button>

      <div className="modal fade" id={`approveModal-${caseItem._id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Case Details </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="card" style={{ width: '28rem' }}>
                <ul className="list-group list-group-flush">
                <div className="mb-3">
                <label htmlFor="exampleInputjudge1" className="form-label mx-2 mt-2 ml-3 mb-2">Enter Judge Names</label>
                <input type="text" className="form-control w-75 ml-3 mr-3 mt-2 mb-2" name='judgename' id="exampleInputEmail1" onChange={(e) => handleChange(e)} aria-describedby="emailHelp" placeholder='Judge Name' />
                </div>
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-info" data-bs-dismiss="modal" onClick={()=>{handleAccept(caseItem._id)}}>Assign a Judge</button>
            </div>
          </div>
        </div>
      </div>
                          </div>
          
                            
                            </div>
                          )}
                          </td>
                        </tr>
                  ))}
                    </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>



    </>
  )
}

export default Assignjudge