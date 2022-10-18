import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Careers() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

      this.classList.toggle("active");

      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });

  }
  return (
    <>
      <h2>Careers</h2>
      <div className='job-postings-container'>
        <h3 className='job-postings-title'>Job Postings:</h3>
        <p className='careers-text'>
          To apply for any of the jobs below please send your resume to fakeemail@example.com and reference the position on the subject line.
        </p>
        <div className='job-postings-list'>
          <div class="accordion">
            <span class="target-fix" id="accordion"></span>
            <div>
              <span class="target-fix" id="accordion1"></span>
              <a href="#accordion1" id="open-accordion1" title="open">Server</a>
              <a href="#accordion" id="close-accordion1" title="close">Server</a> 
              <div class="accordion-content">
                <p>
                  Duties and responsibilities:
                <br/>
                  &#x2022; Greeting customers upon arrival at the restaurant 
                <br/>
                  &#x2022; Providing excellent customer service during their dining experience
                <br/>
                  &#x2022; Providing suggestions for food or drink choices to diners
                <br/>
                  &#x2022; Taking feedback from diners 
                <br/>
                  &#x2022; Cleaning tables and preparing spaces for future diners
                <br/>
                  &#x2022; Carrying drinks and food from the kitchen or bar area to the tables 
                <br/>
                  &#x2022; Memorizing the food menu and wine list as well as any nightly specials
                <br/>
                  &#x2022; Setting tables throughout the shift
                </p>
              </div>
            </div>
            <div>
              <span class="target-fix" id="accordion2"></span>
              <a href="#accordion2" id="open-accordion2" title="open">Chef</a>
              <a href="#accordion" id="close-accordion2" title="close">Chef</a>
              <div class="accordion-content">
                <p>
                  Duties and responsibilities:
                <br/>
                &#x2022; Lead, mentor, and manage culinary team.
                <br/>
                &#x2022; Develop and plan menus and daily specials.
                <br/>
                &#x2022; Create prep lists for kitchen crew.
                <br/>
                &#x2022; Manage food costing and inventory.
                <br/>
                &#x2022; Maintain standards for food storage, rotation, quality, and appearance.
                <br/>
                &#x2022; Ensure compliance with applicable health codes and regulations.
                <br/>
                &#x2022; Establish maintenance and cleaning schedules for equipment, storage, and work areas.
                <br/>
                &#x2022; Participate in interview process and selection of kitchen staff.
                <br/>
                &#x2022; Schedule staff and assist in human resources processes as needed.
                </p>       
              </div>
            </div>
            <div>
              <span class="target-fix" id="accordion3"></span>
              <a href="#accordion3" id="open-accordion3" title="open">Assistant Manager</a>
              <a href="#accordion" id="close-accordion3" title="close">Assistant Manager</a>
              <div class="accordion-content">
                <p>
                  Duties and responsibilities:
                <br/>
                &#x2022; Accomplishes department objectives by managing staff; planning and evaluating department activities.
                <br/>
                &#x2022; Maintains staff by recruiting, selecting, orienting, and training employees.
                <br/>
                &#x2022; Ensures a safe, secure, and legal work environment.
                <br/>
                &#x2022; Develops personal growth opportunities.
                <br/>
                &#x2022; Accomplishes staff results by communicating job expectations; planning, monitoring, and appraising job results.
                <br/>
                &#x2022; Coaches, counsels, and disciplines employees.
                <br/>
                &#x2022; Develops, coordinates, and enforces systems, policies, procedures, and productivity standards.
                <br/>
                &#x2022; Establishes strategic goals by gathering pertinent business, financial, service, and operations information.
                <br/>
                &#x2022; Defines objectives, identifies and evaluates trends and options, chooses a course of action, and evaluates outcomes.
                <br/>
                &#x2022; Accomplishes financial objectives by forecasting requirements, preparing an annual budget, scheduling expenditures, analyzing variances, and initiating corrective actions.
                <br/>
                &#x2022; Maintains quality service by enforcing quality and customer service standards, analyzing and resolving quality and customer service problems, and recommending system improvements.
                <br/>
                &#x2022; Contributes to team effort by accomplishing related results as needed.
                </p>       
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='staff-login-container'>
      <NavLink to='/staff' className='button'>Staff Login!</NavLink>
      </div>
    </>
  )
}
