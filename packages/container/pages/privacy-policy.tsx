import { NextPage } from 'next'
import { Layout} from 'home'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'

const Privacy: NextPage = () => {

	const router = useRouter()

	return (
		<Layout>
			<div className="h-100 w-100 position-relative">
				<div className="d-flex align-items-center mb-3 position-sticky top-0 bg-white px-3 py-2 position-relative z-index-1010">
					<div>
						<Icon icon="material-symbols:arrow-back-rounded" className="fs-24px me-2 cursor-pointer" onClick={() => router.back()} />
					</div>
					<div className="fw-700 fs-18px">Privacy Policy</div>
				</div>
				<div className="position-absolute h-100 top-0 start-0 w-100 scrollbar-1 overflow-y-auto">
					<div className="px-3 pt-10 pb-3">
						<strong>Who we are?</strong>
						<p>Provide name and contact details of the data controller. This will typically be your business or you, if you are a sole trader. Where applicable, you should include the identity and contact details of the controller’s representative and/or the data protection officer.</p>
						<strong>What information do we collect?</strong>
						<p>Specify the types of personal information you collect, eg names, addresses, user names, etc. You should include specific details on:</p>
						<ul>
							<li>how you collect data (eg when a user registers, purchases or uses your services, completes a contact form, signs up to a newsletter, etc)</li>
							<li>what specific data you collect through each of the data collection method</li>
							<li>if you collect data from third parties, you must specify categories of data and source</li>
							<li>if you process sensitive personal data or financial information, and how you handle this</li>
						</ul>
						<p>You may want to provide the user with relevant definitions in relation to personal data and sensitive personal data.</p>
						<strong>How do we use personal information?</strong>
						<p>Describe in detail all the service- and business-related purposes for which you will process data. For example, this may include things like:</p>
						<ul>
							<li>personalisation of content, business information or user experience</li>
							<li>account set up and administration</li>
							<li>delivering marketing and events communication</li>
							<li>carrying out polls and surveys</li>
							<li>internal research and development purposes</li>
							<li>providing goods and services</li>
							<li>legal obligations (eg prevention of fraud)</li>
							<li>meeting internal audit requirements</li>
						</ul>
						<p>Please note this list is not exhaustive. You will need to record all purposes for which you process personal data.</p>
						<strong>What legal basis do we have for processing your personal data?</strong>
						<p>Describe the relevant processing conditions contained within the GDPR. There are six possible legal grounds:</p>
						<ul>
							<li>consent</li>
							<li>contract</li>
							<li>legitimate interests</li>
							<li>vital interests</li>
							<li>public task</li>
							<li>legal obligation</li>
						</ul>
						<p>Provide detailed information on all grounds that apply to your processing, and why. If you rely on consent, explain how individuals can withdraw and manage their consent. If you rely on legitimate interests, explain clearly what these are.</p>
						<p>If you’re processing special category personal data, you will have to satisfy at least one of the six processing conditions, as well as additional requirements for processing under the GDPR. Provide information on all additional grounds that apply.</p>
						<strong>How do we secure personal data?</strong>
						<p>Describe your approach to data security and the technologies and procedures you use to protect personal information. For example, these may be measures:</p>
						<ul>
							<li>to protect data against accidental loss</li>
							<li>to prevent unauthorised access, use, destruction or disclosure</li>
							<li>to ensure business continuity and disaster recovery</li>
							<li>to restrict access to personal information</li>
							<li>to conduct privacy impact assessments in accordance with the law and your business policies</li>
							<li>to train staff and contractors on data security</li>
							<li>to manage third party risks, through use of contracts and security reviews</li>
						</ul>
						<p>Please note this list is not exhaustive. You should record all mechanisms you rely on to protect personal data. You should also state if your organisation adheres to certain accepted standards or regulatory requirements.</p>
						<strong>How long do we keep your personal data for?</strong>
						<p>Provide specific information on the length of time you will keep the information for in relation to each processing purpose. The GDPR requires you to retain data for no longer than reasonably necessary. Include details of your data or records retention schedules, or link to additional resources where these are published.</p>
						<p>If you cannot state a specific period, you need to set out the criteria you will apply to determine how long to keep the data for (eg local laws, contractual obligations, etc)</p>
						<p>You should also outline how you securely dispose of data after you no longer need it.</p>
						<strong>Your rights in relation to personal data</strong>
						<p>Under the GDPR, you must respect the right of data subjects to access and control their personal data. In your privacy notice, you must outline their rights in respect of:</p>
						<ul>
							<li>access to personal information</li>
							<li>correction and deletion</li>
							<li>withdrawal of consent (if processing data on condition of consent)</li>
							<li>data portability</li>
							<li>restriction of processing and objection</li>
							<li>lodging a complaint with the Information Commissioner’s Office</li>
						</ul>
						<p>You should explain how individuals can exercise their rights, and how you plan to respond to subject data requests. State if any relevant exemptions may apply and set out any identity verifications procedures you may rely on.</p>
						<p>Include details of the circumstances where data subject rights may be limited, eg if fulfilling the data subject request may expose personal data about another person, or if you’re asked to delete data which you are required to keep by law.</p>
						<strong>Use of automated decision-making and profiling</strong>
						<p>Where you use profiling or other automated decision-making, you must disclose this in your privacy policy. In such cases, you must provide details on existence of any automated decision-making, together with information about the logic involved, and the likely significance and consequences of the processing of the individual.</p>
						<strong>How to contact us?</strong>
						<p>Explain how data subject can get in touch if they have questions or concerns about your privacy practices, their personal information, or if they wish to file a complaint. Describe all ways in which they can contact you – eg online, by email or postal mail.</p>
						<p>If applicable, you may also include information on:</p>
						<strong>Use of cookies and other technologies</strong>
						<p>You may include a link to further information, or describe within the policy if you intend to set and use cookies, tracking and similar technologies to store and manage user preferences on your website, advertise, enable content or otherwise analyse user and usage data. Provide information on what types of cookies and technologies you use, why you use them and how an individual can control and manage them.</p>
						<p>Linking to other websites / third party content</p>
						<p>If you link to external sites and resources from your website, be specific on whether this constitutes endorsement, and if you take any responsibility for the content (or information contained within) any linked website.</p>
						<p>You may wish to consider adding other optional clauses to your privacy policy, depending on your business’ circumstances.</p>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Privacy
