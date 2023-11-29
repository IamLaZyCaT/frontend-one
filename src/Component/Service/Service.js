import React from 'react'
import './Service.css'

const Service = () => {
  return (
   <>
   <div className='con'id='service'>
    <div>
        <h1>Our Service</h1>
        <p>The legal services we offer ensure the safeguarding of your rights. We advise and defend employees in disputes 
        with the employer. The defence of labour rights acquired over decades, is based on respect, comprehension, 
        flexibility and loyality to the client. Our work is based on objectivity, experience and sensitivity to people.
        </p>
    </div>
   <div className='box' >
        <div className='box-1'>
           
            <img src='https://woodruffsawyer.com/wp-content/uploads/2022/02/desk-lamp-signing_2056444919_compressed.jpg' alt='img1' />
            <div className='minibox-1'>
                <div className='mini'>
                <h3>
                    Labour Law
                </h3>
                <ul>
                    <li>Collective and individual dismissal</li>
                    <li>Participation</li>
                    <li>Disease and reintegation</li>
                    <li>Statutory Directors</li> 
                    <li>Employee Benefits</li> 
                    <li>Health law</li>
                </ul>
                </div>
               
            </div>
        </div>

        <div className='box-2'>
            <img src='https://usalaw.com/wp-content/uploads/2021/12/4-Reasons-Why-a-Personal-Injury-Lawyer-Will-Not-Take-Your-Case.jpg' alt='img2' />
            <div className='minibox-2'>
                <div className='mini'>
                <h3>
                    Corporate Law
                </h3>
                <ul>
                    <li>Transaction & Structuring</li>
                    <li>Commerce</li>
                    <li>Competition</li>
                    <li>Intellectual property</li> 
                    <li>Restructuring and Insolvencies</li> 
                </ul>
                </div>
               
            </div>
        </div>
   </div>
   </div>
   
   </>
  )
}

export default Service