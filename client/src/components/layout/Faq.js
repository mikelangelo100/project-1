import React, { Component } from "react";
import ScrollspyNav from "react-scrollspy-nav";

class FAQs extends Component {
    render() {
        return (
            <div>
                <ScrollspyNav
                    scrollTargetIds={["section_1", "section_2", "section_3"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"
                >
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#section_1"><h1>Frequently Asked Questions</h1>
                        <h2>These are dummy Infos!!! Work in progress</h2>
<p></p>CAN I USE LIFEBANK ON BOTH A LAPTOP / COMPUTER AND ON A USB?
Yes. Readydonor is available in two ways:

As software downloaded onto a laptop/computer or a user’s own USB, or

The USB purchased from Readydonor with the software already loaded on it.

The user has to opt which of the former they want. For security reasons, and in order to limit who has the Licence Key, the USB can be used on any laptop/computer but the software on a laptop/computer cannot be used on multiple laptops/computers.

 

WHAT SECURITY DOES Readydonor PROVIDE TO THE USER?
At the time of initially starting up Readydonor you will need to enter:

The Licence Key provided at the time of purchase

Your email address 

A password which you create. 

Each time you open the application, you will need to enter your email address and your chosen password.

The data on the USB is encrypted. So, if a backup is made of Readydonor it will be encrypted and not become readable until it’s brought back onto the USB.

DOES Readydonor RECORD MY PASSWORD ON ITS SYSTEM?
No. Readydonor only retains details of the purchaser as provided and recorded at the time of purchase - so that, for example, updates of the software can be sent by email.

You set up your own password and need to make a note of it. If you need, a new password can be reset on the application.

DOES Readydonor IN ANY WAY CAPTURE OR HAVE ACCESS TO ANY DATA AS RECORDED ON THE APPLICATION?
No.  Readydonor has no way of knowing whether a backup of data has been made, where it might be or to access it.

HOW DO I KNOW THAT A FORM IS UP TO DATE?
Each Form is date and time stamped - so that when you’re looking through the Usage Report on the application you can see when that Form was last opened, how complete it is and whether there is any Note (which might be a reminder, et al. attached to it).

DOES THE APPLICATION HELP ME AS I WORK MY WAY THROUGH COMPLETING FORMS?
All Forms have the option for a Note to be added to it.  That Note could be a reminder to locate a document, check out something, etc. On using the Usage Report in Readydonor, the user can see the date and time that Form was last accessed, to what extent that Form has been completed and any Note which has been attached to it.

CAN THERE BE MULTIPLE USERS OF Readydonor?
Yes. It is up to the primary user of Readydonor whether they will, for example, share use of the app or allow an additional person to have their own file. Adding another user can be done immediately after booting up Readydonor and before entering it. 

WHERE, AND HOW, DO I GET HELP OR SUPPORT FROM Readydonor?
The Readydonor web site provides an email address to which any query can be sent.     

Readydonor is committed to helping users of the application. Every endeavour will be made to respond promptly to the query - usually within 24-48 hours.

ARE THERE ANY TERMS AND CONDITIONS FOR USE OF Readydonor?
Yes. They are detailed on our web site (click here to view) and were also agreed to when purchasing the app.    

One important term a user needs to note is that the user takes responsibility for the data on the application and not sharing the email and password used to open the application with, other than with a trusted person(s).    

For security reasons, the Licence Key will only work on the application where it was initially installed.

The software cannot be moved across from say a computer or laptop (where it was initially installed) to a laptop or computer respectively.   

WHAT IS THE ‘SHARING INFORMATION’ FUNCTIONALITY ON Readydonor? 
The application allows you to share a Form, Folder or document with a third party - or yourself. Start by going to Sharing Information on the Side Panel and click on it. On the page which opens click on + Add User in order to nominate to whom you wish to share whatever Form, Folder or Information (which you click on from the List on the page), their email address and for how long that Form, Folder or Information is to be shared. Click on Save and that’s it! You will see a record of what you have shared, with whom and for how long.

The Form, Folder or Information will end up on the mobile device or laptop / computer of the person to whom you sent it, for whatever period, as specified, when setting up the share - or indefinitely. You could, for example, send yourself, for use on a mobile device medical information or a document you wish to have available on your mobile device 24/7.

The sharing can also be revoked. Go back to the Sharing Information and simply click on Revoke.

CAN I GET A FORM WHICH IS ON MY Readydonor USB ONTO MY MOBILE DEVICE?
Yes - as explained in the FAQ immediately above. If you are the user of an Apple iPad and using the latest IOS for that iPad, you are also able to plug in the Readydonor USB to the iPad and then from the USB transfer the particular Form onto the mobile device.  

CAN I PRINT OUT A DOCUMENT?
Yes.  Simply open the File or document you want to print and use the Print facility on Readydonor to print it.

CAN I EMAIL A FORM TO SOMEONE?
Yes. Simply use the Email Button on the Form being used and which you want to send.  You will be provided with confirmation that the email has been sent.

CAN I BACKUP ANY FORM OR FOLDER IN Readydonor?
Yes. Simply use the Backup button available on the application and follow the instructions.

Note that the back up on your computer/laptop is encrypted. In other words it is unreadable until opened within the application.

CAN I INCREASE OR DECREASE THE SIZE OF THE FONT ON Readydonor?
Yes - it is possible to either increase or decrease the font size. Go to either the + or - symbol at the top of the application and click on the desired size.

WHAT HAPPENS IF ALL MY DATA ON Readydonor IS LOST?
Assuming you have a backup of LifeBank on your computer / laptop, delete the Folder with LifeBank in it, on your computer / laptop, download and install a new build of LifeBank, open the application, log in and once in LifeBank press the “Restore Back Up” button in the sidebar.

If restoring to the LifeBank USB follow the same procedure, as above, but ensure that you first have fully “cleaned” the USB of any data. Your computer/laptop is certain to have a program which allows for “cleaning” a USB.

If you have not made a backup, check whether you might have software on your computer/laptop which automatically backs up all your work. The company LifeBank - the supplier of the application - does not, and does not have the facility, to back up to it. Please refer to our disclaimer and user obligations for more information.</p></p></a></li>
                        <li><a href="#section_2">Section 2</a></li>
                        <li><a href="#section_3">Section 3</a></li>
                    </ul>
                </ScrollspyNav>
                
                <div>
                    <div style={{"height": "400px"}}><span>Welcome!</span></div>
                    <div id="section_1" style={{"height": "500px"}}><span>Section 1</span></div>
                    <div id="section_2" style={{"height": "500px"}}><span>Section 2</span></div>
                    <div id="section_3" style={{"height": "500px"}}><span>Section 3</span></div>
                </div>
            </div>
        );
    }
}

export default FAQs;