import React from 'react';

function Footer() {
    return (
        <div>
             <section id ="contact" class ="contact-section">
                <div class="contact-section-header">
                    {/* <h2>Let's work together...</h2>
                    <p>How do you take your coffee?</p> */}
                    </div>
                    <div class="contact-links">
                    {/* <a href="https://facebook.com" target="_blank" class="btn contact-details"><i class="fab fa-facebook-square"></i> Facebook</a> */}
                    <a id="profile-link" href="https://github.com/psjoshi20" target="_blank" class="btn contact-details"><i class="fab fa-github"></i> GitHub</a>
                    {/* <a id="linkedin-link" href ="" target="_blank" class="btn contact-details"></a><i class="fas fa-at></i> LinkeIn profile</a>
                    <a id="email" href="" class="btn contact-details"></a><i class="fas fa-at"></i> Send a mail</a> */}
                    <a href="tel:555-555-5555" class="btn contact-details"><i class="fas fa-mobile-alt"></i> Call us </a>
                </div>
            </section>

            <p>designed and developed for Technical Frontend Assessemt 2021</p>
        </div>
    )
}

export default Footer;

