import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

import { Text, View, useTheme } from '../components/Themed';

import { createButtonStyle } from '../styles/buttonStyle';
import { createAboutStyle } from '../styles/aboutStyle';

function TermsAndConditionsScreen() {
  const navigation = useNavigation();
  const colorScheme = useTheme();

  const ButtonStyle = createButtonStyle(colorScheme);
  const AboutStyle = createAboutStyle(colorScheme);

  return (
    <SafeAreaView style={AboutStyle.container}>
      <ScrollView>
        <View>
          <Text style={AboutStyle.pageTitle}>MOBILE APP TERMS AND CONDITIONS OF USE</Text>

          <Text style={AboutStyle.sectionHeading}>1. About the Application</Text>
          <Text style={AboutStyle.textParagraph}>
            (a) Welcome to the Evoleon Electric Vehicle Charger Locating{' '}
            <Text style={AboutStyle.boldText}>(Application)</Text>. The Application provides information about existing
            EV Charging locations, their related facilities, and helps navigate you to the charging locations you select{' '}
            <Text style={AboutStyle.boldText}>(Services)</Text>.
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (b) The Application is operated by Chameleon which is a student created and operated initiative. Access to
            and use of the Application, or any of its associated Products or Services, is provided by Chameleon. Please
            read these terms and conditions (Terms) carefully. By using, browsing and/or reading the Application, this
            signifies that you have read, understood and agree to be bound by the Terms. If you do not agree with the
            Terms, you must cease usage of the Application, or any of Services, immediately.
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (c) Chameleon reserves the right to review and change any of the Terms by updating this page at its sole
            discretion. When Chameleon updates the Terms, it will use reasonable endeavours to provide you with notice
            of updates to the Terms. Any changes to the Terms take immediate effect from the date of their publication.
            Before you continue, we recommend you keep a copy of the Terms for your records.
          </Text>
          <Text style={AboutStyle.sectionHeading}>2. Acceptance of the Terms</Text>
          <Text style={AboutStyle.textParagraph}>
            (a) You accept the Terms by remaining on the Application. You may also accept the Terms by clicking to
            accept or agree to the Terms where this option is made available to you by Chameleon in the user interface.
          </Text>
          <Text style={AboutStyle.sectionHeading}>3. Registration to use the Services</Text>
          <Text style={AboutStyle.textParagraph}>
            (a) In order to access the Services, you must first register for an account through the Application{' '}
            <Text style={AboutStyle.boldText}>(Account)</Text>.
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (b) As part of the registration process, or as part of your continued use of the Services, you may be
            required to provide personal information about yourself (such as identification or contact details),
            including:
          </Text>
          <Text style={AboutStyle.textSubparagraph}>(i) Email address</Text>
          <Text style={AboutStyle.textSubparagraph}>(ii) Preferred username</Text>
          <Text style={AboutStyle.textSubparagraph}>(iii) Password</Text>
          <Text style={AboutStyle.textSubparagraph}>(iv) Electric Vehicle Charging Preferences</Text>
          <Text style={AboutStyle.textParagraph}>
            (c) You warrant that any information you give to Chameleon in the course of completing the registration
            process will always be accurate, correct, and up to date.
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (d) Once you have completed the registration process, you will be a registered member of the Application{' '}
            <Text style={AboutStyle.boldText}>(Member)</Text> and agree to be bound by the Terms.
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (e) You may not use the Services and may not accept the Terms if:
          </Text>
          <Text style={AboutStyle.textSubparagraph}>
            (i) you are not of legal age to form a binding contract with Chameleon; or
          </Text>
          <Text style={AboutStyle.textSubparagraph}>
            (ii) you are a person barred from receiving the Services under the laws of Australia or other countries,
            including the country in which you are a resident or from which you use the Services.
          </Text>
          <Text style={AboutStyle.sectionHeading}>4. Your obligations as a Member</Text>
          <Text style={AboutStyle.textParagraph}>(a) As a Member, you agree to comply with the following:</Text>
          <Text style={AboutStyle.textSubparagraph}>
            (i) you will use the Services only for purposes that are permitted by:
          </Text>
          <Text style={AboutStyle.textIndent}>(A) the Terms; and</Text>
          <Text style={AboutStyle.textIndent}>
            (B) any applicable law, regulation, or generally accepted practices or guidelines in the relevant
            jurisdictions;
          </Text>
          <Text style={AboutStyle.textSubparagraph}>
            (ii) you have the sole responsibility for protecting the confidentiality of your password and/or email
            address. Use of your password by any other person may result in the immediate cancellation of the Services;
          </Text>
          <Text style={AboutStyle.textSubparagraph}>
            (iii) any use of your registration information by any other person or third parties is strictly prohibited.
            You agree to immediately notify Chameleon of any unauthorized use of your password or email address or any
            breach of security of which you have become aware;
          </Text>
          <Text style={AboutStyle.textSubparagraph}>
            (iv) access and use of the Application is limited, non-transferable, and allows for the sole use of the
            Application by you for the purposes of Chameleon providing the Services;
          </Text>
          <Text style={AboutStyle.textSubparagraph}>
            (v) you will not use the Services or the Application in connection with any commercial endeavors except
            those that are specifically endorsed or approved by the management of Chameleon;
          </Text>
          <Text style={AboutStyle.textSubparagraph}>
            (vi) you will not use the Services or Application for any illegal and/or unauthorized use, which includes
            collecting email addresses of Members by electronic or other means for the purpose of sending unsolicited
            email or unauthorized framing of or linking to the Application;
          </Text>
          <Text style={AboutStyle.textSubparagraph}>
            (vii) you agree that commercial advertisements, affiliate links, and other forms of solicitation may be
            removed from the Application without notice and may result in termination of the Services. Appropriate legal
            action will be taken by Chameleon for any illegal or unauthorized use of the Application; and
          </Text>
          <Text style={AboutStyle.textSubparagraph}>
            (viii) you acknowledge and agree that any automated use of the Application or its Services is prohibited.
          </Text>

          <Text style={AboutStyle.sectionHeading}>5. Copyright and Intellectual Property</Text>
          <Text style={AboutStyle.textParagraph}>
            (a) The Application, the Services, and all of the related products of Chameleon are subject to copyright.
            The material on the Application is protected by copyright under the laws of Australia and through
            international treaties. Unless otherwise indicated, all rights (including copyright) in the Services and
            compilation of the Application (including but not limited to text, graphics, logos, button icons, video
            images, audio clips, Application code, scripts, design elements, and interactive features) or the Services
            are owned or controlled for these purposes, and are reserved by Chameleon or its contributors.
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (b) All trademarks, service marks, and trade names are owned, registered, and/or licensed by Chameleon, who
            grants to you a worldwide, non-exclusive, royalty-free, revocable license whilst you are a Member to:
          </Text>
          <Text style={AboutStyle.textSubparagraph}>(i) use the Application pursuant to the Terms;</Text>
          <Text style={AboutStyle.textSubparagraph}>
            (ii) copy and store the Application and the material contained in the Application in your device's cache
            memory; and
          </Text>
          <Text style={AboutStyle.textSubparagraph}>
            (iii) print pages from the Application for your own personal and non-commercial use.
          </Text>
          <Text style={AboutStyle.textParagraph}>
            Chameleon does not grant you any other rights whatsoever in relation to the Application or the Services. All
            other rights are expressly reserved by Chameleon.
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (c) Chameleon retains all rights, title, and interest in and to the Application and all related Services.
            Nothing you do on or in relation to the Application will transfer any:
          </Text>
          <Text style={AboutStyle.textSubparagraph}>
            (i) business name, trading name, domain name, trade mark, industrial design, patent, registered design, or
            copyright, or
          </Text>
          <Text style={AboutStyle.textSubparagraph}>
            (ii) a right to use or exploit a business name, trading name, domain name, trade mark, or industrial design,
            or
          </Text>
          <Text style={AboutStyle.textSubparagraph}>
            (iii) a thing, system, or process that is the subject of a patent, registered design, or copyright (or an
            adaptation or modification of such a thing, system, or process), to you.
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (d) You may not, without the prior written permission of Chameleon and the permission of any other relevant
            rights owners: broadcast, republish, upload to a third party, transmit, post, distribute, show, or play in
            public, adapt, or change in any way the Services or third-party Services for any purpose, unless otherwise
            provided by these Terms. This prohibition does not extend to materials on the Application, which are freely
            available for re-use or are in the public domain.
          </Text>
          <Text style={AboutStyle.sectionHeading}>6. Privacy</Text>
          <Text style={AboutStyle.textParagraph}>
            (a) Chameleon takes your privacy seriously and any information provided through your use of the Application
            and/or Services are subject to Chameleon’s Privacy Policy, which is available on the Application.
          </Text>

          <Text style={AboutStyle.sectionHeading}>7. General Disclaimer</Text>
          <Text style={AboutStyle.textParagraph}>
            (a) Nothing in the Terms limits or excludes any guarantees, warranties, representations, or conditions
            implied or imposed by law, including the Australian Consumer Law (or any liability under them) which by law
            may not be limited or excluded.
          </Text>
          <Text style={AboutStyle.textParagraph}>(b) Subject to this clause, and to the extent permitted by law:</Text>
          <Text style={AboutStyle.textSubparagraph}>
            (i) all terms, guarantees, warranties, representations, or conditions which are not expressly stated in the
            Terms are excluded; and
          </Text>
          <Text style={AboutStyle.textSubparagraph}>
            (ii) Chameleon will not be liable for any special, indirect or consequential loss or damage (unless such
            loss or damage is reasonably foreseeable resulting from our failure to meet an applicable Consumer
            Guarantee), loss of profit or opportunity, or damage to goodwill arising out of or in connection with the
            Services or these Terms (including as a result of not being able to use the Services or the late supply of
            the Services), whether at common law, under contract, tort (including negligence), in equity, pursuant to
            statute or otherwise.
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (c) Use of the Application and the Services is at your own risk. Everything on the Application and the
            Services is provided to you "as is" and "as available" without warranty or condition of any kind. None of
            the affiliates, directors, officers, employees, agents, contributors, and licensors of Chameleon make any
            express or implied representation or warranty about the Services or any products or Services (including the
            products or Services of Chameleon) referred to on the Application. This includes (but is not restricted to)
            loss or damage you might suffer as a result of any of the following:
          </Text>
          <Text style={AboutStyle.textSubparagraph}>
            (i) failure of performance, error, omission, interruption, deletion, defect, failure to correct defects,
            delay in operation or transmission, computer virus, or other harmful component, loss of data, communication
            line failure, unlawful third party conduct, or theft, destruction, alteration, or unauthorized access to
            records;
          </Text>
          <Text style={AboutStyle.textSubparagraph}>
            (ii) the accuracy, suitability, or currency of any information on the Application, the Services, or any of
            its Services related products (including third party material and advertisements on the Application);
          </Text>
          <Text style={AboutStyle.textSubparagraph}>
            (iii) costs incurred as a result of you using the Application, the Services, or any of the products of
            Chameleon; and
          </Text>
          <Text style={AboutStyle.textSubparagraph}>
            (iv) the Services or operation in respect to links which are provided for your convenience.
          </Text>
          <Text style={AboutStyle.sectionHeading}>8. Limitation of Liability</Text>
          <Text style={AboutStyle.textParagraph}>
            (a) Chameleon’s total liability arising out of or in connection with the Services or these Terms, however
            arising, including under contract, tort (including negligence), in equity, under statute or otherwise, will
            not exceed the resupply of the Services to you.
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (b) You expressly understand and agree that Chameleon, its affiliates, employees, agents, contributors, and
            licensors shall not be liable to you for any direct, indirect, incidental, special, consequential, or
            exemplary damages which may be incurred by you, however caused and under any theory of liability. This shall
            include, but is not limited to, any loss of profit (whether incurred directly or indirectly), any loss of
            goodwill or business reputation, and any other intangible loss.
          </Text>

          <Text style={AboutStyle.sectionHeading}>9. Competitors</Text>
          <Text style={AboutStyle.textParagraph}>
            If you are in the business of providing similar Services for the purpose of providing them to users for a
            commercial gain, whether business users or domestic users, then you are a competitor of Chameleon.
            Competitors are not permitted to use or access any information or content on our Application. If you breach
            this provision, Chameleon will hold you fully responsible for any loss that we may sustain and hold you
            accountable for all profits that you might make from such a breach.
          </Text>
          <Text style={AboutStyle.sectionHeading}>10. Termination of Contract</Text>
          <Text style={AboutStyle.textParagraph}>
            (a) The Terms will continue to apply until terminated by either you or by Chameleon as set out below.
          </Text>
          <Text style={AboutStyle.textParagraph}>(b) If you want to terminate the Terms, you may do so by:</Text>
          <Text style={AboutStyle.textParagraph}>
            (i) providing Chameleon with 0 days' notice of your intention to terminate; and
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (ii) closing your accounts for all of the services which you use, where Chameleon has made this option
            available to you.
          </Text>
          <Text style={AboutStyle.textParagraph}>
            Your notice should be sent, in writing, to Chameleon via the 'Contact Us' link on our homepage.
          </Text>
          <Text style={AboutStyle.textParagraph}>(c) Chameleon may at any time, terminate the Terms with you if:</Text>
          <Text style={AboutStyle.textParagraph}>
            (i) you have breached any provision of the Terms or intend to breach any provision;
          </Text>
          <Text style={AboutStyle.textParagraph}>(ii) Chameleon is required to do so by law;</Text>
          <Text style={AboutStyle.textParagraph}>
            (iii) the provision of the Services to you by Chameleon is, in the opinion of Chameleon, no longer
            commercially viable.
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (d) Subject to local applicable laws, Chameleon reserves the right to discontinue or cancel your membership
            at any time and may suspend or deny, in its sole discretion, your access to all or any portion of the
            Application or the Services without notice if you breach any provision of the Terms or any applicable law or
            if your conduct impacts Chameleon’s name or reputation or violates the rights of those of another party.
          </Text>

          <Text style={AboutStyle.sectionHeading}>11. Indemnity</Text>
          <Text style={AboutStyle.textParagraph}>
            (a) You agree to indemnify Chameleon, its affiliates, employees, agents, contributors, third party content
            providers, and licensors from and against:
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (i) all actions, suits, claims, demands, liabilities, costs, expenses, loss and damage (including legal fees
            on a full indemnity basis) incurred, suffered or arising out of or in connection with your content;
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (ii) any direct or indirect consequences of you accessing, using, or transacting on the Application or
            attempts to do so; and/or
          </Text>
          <Text style={AboutStyle.textParagraph}>(iii) any breach of the Terms.</Text>
          <Text style={AboutStyle.sectionHeading}>12. Dispute Resolution</Text>
          <Text style={AboutStyle.textParagraph}>
            (a) <Text style={AboutStyle.boldText}>Compulsory:</Text>
          </Text>
          <Text style={AboutStyle.textParagraph}>
            If a dispute arises out of or relates to the Terms, either party may not commence any Tribunal or Court
            proceedings in relation to the dispute, unless the following clauses have been complied with (except where
            urgent interlocutory relief is sought).
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (b) <Text style={AboutStyle.boldText}>Notice:</Text>
          </Text>
          <Text style={AboutStyle.textParagraph}>
            A party to the Terms claiming a dispute <Text style={AboutStyle.boldText}>(Dispute)</Text> has arisen under
            the Terms must give written notice to the other party detailing the nature of the dispute, the desired
            outcome, and the action required to settle the Dispute.
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (c) <Text style={AboutStyle.boldText}>Resolution:</Text>
          </Text>
          <Text style={AboutStyle.textParagraph}>
            On receipt of that notice <Text style={AboutStyle.boldText}>(Notice)</Text> by that other party, the parties
            to the Terms <Text style={AboutStyle.boldText}>(Parties)</Text> must:
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (i) Within 14 days of the Notice, endeavor in good faith to resolve the Dispute expeditiously by negotiation
            or such other means upon which they may mutually agree;
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (ii) If for any reason whatsoever, 14 days after the date of the Notice, the Dispute has not been resolved,
            the Parties must request that an appropriate mediator be appointed by the The Law Society of VIC Mediation
            Program;
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (iii) The Parties are equally liable for the fees and reasonable expenses of a mediator and the cost of the
            venue of the mediation and without limiting the foregoing undertake to pay any amounts requested by the
            mediator as a pre-condition to the mediation commencing. The Parties must each pay their own costs
            associated with the mediation;
          </Text>
          <Text style={AboutStyle.textParagraph}>(iv) The mediation will be held in Melbourne, Australia.</Text>
          <Text style={AboutStyle.textParagraph}>
            (d) <Text style={AboutStyle.boldText}>Confidential:</Text>
          </Text>
          <Text style={AboutStyle.textParagraph}>
            All communications concerning negotiations made by the Parties arising out of and in connection with this
            dispute resolution clause are confidential and to the extent possible, must be treated as "without
            prejudice" negotiations for the purpose of applicable laws of evidence.
          </Text>
          <Text style={AboutStyle.textParagraph}>
            (e) <Text style={AboutStyle.boldText}>Termination of Mediation:</Text>
          </Text>
          <Text style={AboutStyle.textParagraph}>
            If 30 days have elapsed after the start of a mediation of the Dispute and the Dispute has not been resolved,
            either Party may ask the mediator to terminate the mediation, and the mediator must do so.
          </Text>

          <Text style={AboutStyle.sectionHeading}>13. Venue and Jurisdiction</Text>
          <Text style={AboutStyle.textParagraph}>
            (a) The Services offered by Chameleon are intended to be viewed by residents of Australia. In the event of
            any dispute arising out of or in relation to the Application, you agree that the exclusive venue for
            resolving any dispute shall be in the courts of Victoria, Australia.
          </Text>
          <Text style={AboutStyle.sectionHeading}>14. Governing Law</Text>
          <Text style={AboutStyle.textParagraph}>
            (a) The Terms are governed by the laws of Victoria, Australia. Any dispute, controversy, proceeding, or
            claim of whatever nature arising out of or in any way relating to the Terms and the rights created hereby
            shall be governed, interpreted, and construed by, under, and pursuant to the laws of Victoria, Australia,
            without reference to conflict of law principles, notwithstanding mandatory rules. The validity of this
            governing law clause is not contested. The Terms shall be binding to the benefit of the parties hereto and
            their successors and assigns.
          </Text>

          <Text style={AboutStyle.sectionHeading}>15. Independent Legal Advice</Text>
          <Text style={AboutStyle.textParagraph}>
            (a) Both parties confirm and declare that the provisions of the Terms are fair and reasonable, and both
            parties having taken the opportunity to obtain independent legal advice and declare the Terms are not
            against public policy on the grounds of inequality or bargaining power or general grounds of restraint of
            trade.
          </Text>

          <Text style={AboutStyle.sectionHeading}>16. Severance</Text>
          <Text style={AboutStyle.textParagraph}>
            (a) If any part of these Terms is found to be void or unenforceable by a Court of competent jurisdiction,
            that part shall be severed, and the rest of the Terms shall remain in force.
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[{ marginTop: 20 }, ButtonStyle.BackButton]}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={ButtonStyle.Text}>{'Back'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default TermsAndConditionsScreen;
