import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import { Scene, Router, Actions } from 'react-native-router-flux';

class TermsConditions extends Component {


  render() {
    return (
    <ScrollView style={styles.container}>

    <Text style={styles.textStyle}>Last updated: March 10, 2017</Text>

    <Text style={styles.textStyle}>Please read these Terms and Conditions ("Terms", "Terms and conditions") carefully before using the HOWL Alert mobile application (the "Service") operated by HOWL Alert ("us", "we", or "our").</Text>
    <Text style={styles.textStyle}>Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who wish to access or use the Service.</Text>
    <Text style={styles.textStyle}>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you do not have permission to access the Service.</Text>
    <Text style={styles.textStyle2}>PURCHASES</Text>
    <Text style={styles.textStyle}>If you wish to purchase any product or service made available through the Service("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</Text>
    <Text style={styles.textStyle}>You represent and warrant that: (i) you have the legal right to use any credit card (s) or other payment method(s) in connection wiht any Purchase; and that (ii) the information you supply to us is true, correct and complete.</Text>
    <Text style={styles.textStyle}>Ther service may employ the use of third party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy policy.</Text>
    <Text style={styles.textStyle2}>AVAILABILITY, ERRORS AND INACCURACIES</Text>
    <Text style={styles.textStyle}>We are constantly updating product and service offerings on the Service. We may experience delatys in updating information on the Service and in our advertising on other web sites. The information found on the Service may contain errors or inaccuracies and may not be complete or current. Products or services may be mispriced, described inaccurately, or unavailable on the Service and we cannot guarantee the accuracy or completeness of any information found on the Service.</Text>
    <Text style={styles.textStyle}>We therfore reserve the right to change or update information and to correct errors, inaccuracies, or omissions at any time without prior notice</Text>
    <Text style={styles.textStyle2}>ACCOUNTS</Text>
    <Text style={styles.textStyle}>When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.</Text>
    <Text style={styles.textStyle}>You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to youru computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your upassword is with our Service or a third party service. You must notify us immediatedly upon becoming aware of any breach of security or unauthorized use of your account.</Text>
    <Text style={styles.textStyle}>You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensiv, vulgar or obscene.</Text>
    <Text style={styles.textStyle2}>INTELLECTUAL PROPERTY</Text>
    <Text style={styles.textStyle}>Ther Service and its original content,features and functionality are and will remain the exclusive property of HOWL Alert and its licensors. The Service is protected by copyright, trademark, and other lawas of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of HOWL Alert.</Text>
    <Text style={styles.textStyle2}>LINKS TO OTHER WEB SITES</Text>
    <Text style={styles.textStyle}>Our Service may contain links to third party web sites or services that are not owned or controlled by HOWL Alert.</Text>
    <Text style={styles.textStyle2}>HOWL Alert has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/indviduals or their websites.</Text>
    <Text style={styles.textStyle}>You acknowledge and agree that HOWL Alert shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such third party web sites or services.</Text>
    <Text style={styles.textStyle}>We strongly advice you to read the terms and conditions and privacy policies of any third party web sites or services that you visit.</Text>
    <Text style={styles.textStyle2}>TERMINATION</Text>
    <Text style={styles.textStyle}>We may terminate or suspend your account and bar access to the Service immediatedly, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</Text>
    <Text style={styles.textStyle}>If you wish to terminate your account, you may simply discontinue using the Service.</Text>
    <Text style={styles.textStyle}>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liabiilty.</Text>
    <Text style={styles.textStyle2}>INDEMNIFICATION</Text>
    <Text style={styles.textStyle}>You agree to defend, indemnify and hold harmless HOWL Alert and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses)including but not limited to attorneys fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password, or b) a breach of these Terms.</Text>
    <Text style={styles.textStyle}>In no event shall HOWL Alert, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indiredct, incidental, special consequential or punitive damages, including without limitaion, loss of profits, data, use, goodwill, or other intangible losses,
    resulting from  your access to or use of or inability to access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service and  unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort(including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</Text>
    <Text style={styles.textStyle2}>DISCLAIMER</Text>
    <Text style={styles.textStyle}>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</Text>
    <Text style={styles.textStyle}>Howl Alert its subsidiaries, affiliates, and it slicensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.</Text>
    <Text style={styles.textStyle2}>EXCLUSIONS</Text>
    <Text style={styles.textStyle}>Some jurisdications do not allow the exclusion of certain warranties or the exclusion or limitation of liability for consequential or incidental damages, so the limitations above may not apply to you.</Text>
    <Text style={styles.textStyle2}>GOVERNING LAW</Text>
    <Text style={styles.textStyle}>These Terms shall be goverened and construed in accordance with the lawas of New York, United States, without regard to its conflict of law provisions.</Text>
    <Text style={styles.textStyle}>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms constitute the entire agreement between us regarding our Serice, and supersede and replace any prior agreements we might have had between us regarding the Service</Text>
    <Text style={styles.textStyle2}>CHANGES</Text>
    <Text style={styles.textStyle}>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</Text>
    <Text style={styles.textStyle}>By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms, you are no longer authorized to use this Service.</Text>
    <Text style={styles.textStyle2}>CONTACT US</Text>
    <Text style={styles.textStyle}>If you have any questions about these terms, please contact us.</Text>



    <Text style={styles.textStyle}>Sed et consectetur mi, varius tristique enim. Mauris ac tempus quam, nec molesti
     neque. Nam ultricies ipsum nec leo laoreet suscipit. Fusce et nibh justo. Morbi lobortis
      lectus non tristique dapibus. Donec bibendum laoreet est, vitae vehicula ligula
      efficitur ac. Morbi lobortis risus ut dapibus ultrices. Etiam sit amet
      ullamcorper orci, quis tempor tellus. Mauris neque tellus, aliquet at finibus
      vel, consequat sed est.</Text>

      <Text style={styles.textStyle}>Sed et consectetur mi, varius tristique enim. Mauris ac tempus quam, nec molesti
       neque. Nam ultricies ipsum nec leo laoreet suscipit. Fusce et nibh justo. Morbi lobortis
        lectus non tristique dapibus. Donec bibendum laoreet est, vitae vehicula ligula
        efficitur ac. Morbi lobortis risus ut dapibus ultrices. Etiam sit amet
        ullamcorper orci, quis tempor tellus. Mauris neque tellus, aliquet at finibus
        vel, consequat sed est.</Text>

        <Text style={styles.textStyle}>Sed et consectetur mi, varius tristique enim. Mauris ac tempus quam, nec molesti
         neque. Nam ultricies ipsum nec leo laoreet suscipit. Fusce et nibh justo. Morbi lobortis
          lectus non tristique dapibus. Donec bibendum laoreet est, vitae vehicula ligula
          efficitur ac. Morbi lobortis risus ut dapibus ultrices. Etiam sit amet
          ullamcorper orci, quis tempor tellus. Mauris neque tellus, aliquet at finibus
          vel, consequat sed est.</Text>

          <Text style={styles.textStyle}>Sed et consectetur mi, varius tristique enim. Mauris ac tempus quam, nec molesti
           neque. Nam ultricies ipsum nec leo laoreet suscipit. Fusce et nibh justo. Morbi lobortis
            lectus non tristique dapibus. Donec bibendum laoreet est, vitae vehicula ligula
            efficitur ac. Morbi lobortis risus ut dapibus ultrices. Etiam sit amet
            ullamcorper orci, quis tempor tellus. Mauris neque tellus, aliquet at finibus
            vel, consequat sed est.</Text>

    </ScrollView>
    );
  }
}


const styles = {
  container:{
     flex            : 1,
     backgroundColor : '#F5FCFF',
     paddingLeft:30,
     paddingRight:30,
     backgroundColor:'#fff',
     paddingTop:65,
     paddingBottom:30
  },
  iconStyle:{
    position:'absolute',
    right:0,
    top:30
  },

  wrapper: {
    marginTop:0,
    paddingTop:0
  },
  imageStyle:{
    width:180,
    height:180,
    marginBottom:20,
    alignSelf:'center'
  },
  slide1: {

    flex: 1,
    justifyContent: 'flex-start',

    alignSelf: 'stretch',
    paddingTop:80,
    paddingLeft:40,
    paddingRight:40

  },
  slide2: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:40

  },
  slide3: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:40
  },
  textStyle: {

    textAlign:'left',
    paddingRight:0,
    paddingLeft:0,
    marginBottom:5,
    marginTop:5
  },
  textStyle2: {
    fontWeight:'800',
    fontColor:'#000',
    textAlign:'left',
    paddingRight:0,
    paddingLeft:0,
    marginBottom:5,
    marginTop:5
  },
  spinnerStyle:{
    marginTop:40
  }
}



export default TermsConditions;
