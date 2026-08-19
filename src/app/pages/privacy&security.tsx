import { motion } from 'framer-motion';
import { FileText, LockKeyhole, ShieldCheck } from 'lucide-react';
import ScrollToTop from '../../constants/scrollToTop';
import { APP_NAME } from '../constants/company-name';

type PrivacySection = {
  number: number;
  title: string;
  paragraphs?: string[];
  subsections?: { title: string; items: string[] }[];
  items?: string[];
};

const sections: PrivacySection[] = [
  {
    number: 1,
    title: 'Information We Collect',
    paragraphs: [`Depending on how you use ${APP_NAME}, we may collect:`, `We only intend to collect information reasonably necessary for operating, securing, and improving ${APP_NAME}.`],
    subsections: [
      { title: 'Account information', items: ['Name.', 'Email address.', 'Phone number, where provided.', 'Username.', 'Password credentials in protected form.', 'Date of birth or age information where required.', 'Profile information.'] },
      { title: 'Content', items: ['Profile pictures.', 'Posts.', 'Comments.', 'Videos.', 'Images.', 'Messages.', 'Reactions.', 'Other content you voluntarily upload.'] },
      { title: 'Technical information', items: ['Device information.', 'Operating system.', 'App version.', 'IP address.', 'Push notification/device tokens.', 'Log information.', 'Crash and performance information.'] },
      { title: 'Usage information', items: ['Posts you interact with.', 'Profiles you follow.', 'Notifications.', 'Messages and chat activities.', 'Features you use.'] },
    ],
  },
  {
    number: 2,
    title: 'Why We Collect Your Information',
    paragraphs: ['We may process your information to:', `Ugandan law generally requires prior consent for collecting or processing personal data, subject to specified legal exceptions including contractual necessity and legal obligations.`],
    items: ['Create and maintain your account.', `Provide ${APP_NAME}'s social and messaging features.`, 'Display your profile and content.', 'Deliver notifications.', 'Deliver messages.', 'Maintain security.', 'Detect fraud, abuse, and prohibited activity.', 'Improve application performance.', 'Troubleshoot errors.', 'Provide customer support.', 'Communicate with important service information.', 'Comply with legal obligations.'],
  },
  {
    number: 3,
    title: 'Your Content and Public Information',
    paragraphs: [`Information you deliberately make public may be visible to other ${APP_NAME} users and potentially accessible through public links or other sharing mechanisms.`, `For example, if you make a post public, you should assume that other users may:`],
    items: ['View it.', 'Share it.', 'Screenshot it.', 'Save it.', 'Report it.'],
  },
  {
    number: 4,
    title: 'Private Messages',
    paragraphs: [`${APP_NAME} treats private messages as private within the normal operation of the platform.`, 'However:', `${APP_NAME} does not currently promise end-to-end encryption for private messages unless the feature is explicitly identified as end-to-end encrypted.`, `Messages may therefore be technically accessible to ${APP_NAME} or its authorized service providers where necessary to operate the service, maintain security, investigate abuse or comply with law.`, `Do not treat ${APP_NAME} messaging as a substitute for a system specifically designed for highly confidential communications.`],
  },
  {
    number: 5,
    title: 'Third-Party Service Providers',
    paragraphs: [`${APP_NAME} may use trusted technology providers to operate its infrastructure.`, 'These may include providers for:', `These providers may process personal information on ${APP_NAME}'s behalf.`, 'Ugandan data-protection requirements impose obligations around processors and appropriate technical and organisational safeguards.'],
    items: ['Database hosting.', 'Authentication.', 'Cloud storage.', 'Image and video processing.', 'Push notifications.', 'Analytics.', 'Error monitoring.', 'Email delivery.'],
  },
  {
    number: 6,
    title: 'International Data Processing',
    paragraphs: [`Some ${APP_NAME} technology providers may store or process information outside Uganda.`, `Where personal data is processed or stored outside Uganda, ${APP_NAME} will seek to comply with the applicable requirements of Ugandan data-protection law, including requirements concerning adequate safeguards or consent where applicable.`],
  },
  {
    number: 7,
    title: 'Security',
    paragraphs: ['We use reasonable technical and organisational measures to protect personal data against:', 'Depending on the feature, security measures may include:', 'However:', 'No internet-based system can be guaranteed to be completely secure.', 'You should therefore also protect your password, device and account credentials.', "Uganda's Data Protection and Privacy Act requires data controllers, processors and collectors to take appropriate and reasonable measures to protect personal data."],
    subsections: [
      { title: 'Protection against', items: ['Unauthorised access.', 'Loss.', 'Destruction.', 'Alteration.', 'Disclosure.', 'Misuse.'] },
      { title: 'Possible security measures', items: ['Authentication.', 'Access controls.', 'Database security policies.', 'Encryption in transit.', 'Secure storage.', 'Security monitoring.', 'Rate limiting.', 'Backup and recovery measures.'] },
    ],
  },
  {
    number: 8,
    title: 'Data Retention',
    paragraphs: [`We keep personal data only for as long as reasonably necessary for the purposes for which it was collected, to provide ${APP_NAME}, resolve disputes, maintain security, comply with legal obligations or otherwise as permitted by law.`, 'When information is no longer required, we may delete, anonymise or securely dispose of it.', 'Ugandan law also provides for destruction, deletion or de-identification after applicable retention periods.'],
  },
  {
    number: 9,
    title: 'Your Privacy Rights',
    paragraphs: ['Subject to applicable law, you may have rights to:', "Uganda's Act expressly provides data subjects with access rights, including a right to request information held about them; the Act provides for responses to qualifying access requests within 30 days."],
    items: [`Know whether ${APP_NAME} holds personal information about you.`, 'Request access to your personal information.', 'Request correction of inaccurate information.', 'Request deletion where legally applicable.', 'Object to certain processing.', 'Withdraw consent where consent is the basis of processing.', 'Ask questions about how your information is being used.'],
  },
  {
    number: 10,
    title: 'Deleting Your Account',
    paragraphs: [`You may request deletion of your ${APP_NAME} account.`, `Account deletion may result in the removal or anonymisation of information associated with the account, subject to information that ${APP_NAME} is legally required or legitimately permitted to retain.`, 'Content that has been shared by other users or information required for legal, security or fraud-prevention purposes may not always be immediately or permanently removable.'],
  },
  {
    number: 11,
    title: "Children's Data",
    paragraphs: [`${APP_NAME} does not intentionally seek to collect children's personal information without the safeguards required by applicable law.`, `Where processing concerns a child, ${APP_NAME} will apply the requirements of Ugandan law concerning parental or guardian consent where applicable.`, `If you believe a child has provided personal information to ${APP_NAME} improperly, contact us.`],
  },
  {
    number: 12,
    title: 'Data Breaches',
    paragraphs: [`If ${APP_NAME} becomes aware of a personal-data security incident, we will assess it and take appropriate steps under applicable law, including containment, investigation, remediation and notifications where legally required.`, 'The PDPO identifies breach response and management as part of an organisation’s data-protection compliance responsibilities.'],
  },
  {
    number: 13,
    title: 'Marketing',
    paragraphs: [`${APP_NAME} may send service-related communications such as:`, 'Marketing communications will be handled in accordance with applicable law and, where required, appropriate consent and opt-out mechanisms.', "Uganda's Electronic Transactions Act also contains provisions concerning unsolicited commercial communications and the ability to cancel subscriptions to mailing lists."],
    items: ['Account verification.', 'Security alerts.', 'Password/account notices.', 'Important service announcements.'],
  },
  {
    number: 14,
    title: 'Cookies and Similar Technologies',
    paragraphs: [`Where ${APP_NAME}'s website uses cookies or similar technologies, they may be used for:`, 'Where required, we will provide appropriate information and choices concerning non-essential technologies.'],
    items: ['Authentication.', 'Security.', 'Remembering preferences.', 'Analytics.', 'Improving performance.'],
  },
  {
    number: 15,
    title: 'Changes to This Privacy Notice',
    paragraphs: [`We may update this Notice as ${APP_NAME} develops, introduces new features or responds to changes in law.`, `The latest version will be made available through ${APP_NAME}.`],
  },
  {
    number: 16,
    title: 'Contact and Privacy Requests',
    paragraphs: ['For privacy questions, data-access requests, correction requests, deletion requests or security concerns, contact:', `${APP_NAME} Privacy Contact Email: privacy@yourdomain.com`, 'General support: support@yourdomain.com', 'Location: Uganda', 'We may require reasonable information to verify your identity before responding to a request involving personal information.'],
  },
];

const highlights = [
  { number: '01', label: 'Understand your data', icon: FileText },
  { number: '02', label: 'Know your privacy rights', icon: ShieldCheck },
  { number: '03', label: 'Protect your account', icon: LockKeyhole },
];

export function PrivacyAndSecurity() {
  return (
    <main className="min-h-screen bg-black px-4 pb-24 pt-32 text-white sm:px-6 lg:px-8">
      <ScrollToTop />
      <div className="mx-auto max-w-5xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 border-b border-white/10 pb-10"
        >
          <div className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
            <ShieldCheck size={18} /> Privacy and security
          </div>
          <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">{APP_NAME} Privacy and Security Notice</h1>
          <p className="max-w-2xl text-lg leading-8 text-gray-400">How we collect, use and protect your information under Uganda’s data-protection framework.</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Effective date: 19 August 2026</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Last updated: 19 August 2026</span>
          </div>
        </motion.header>
        <div className="mb-10 rounded-2xl border border-blue-300/20 bg-blue-300/[0.06] p-6 text-[15px] leading-7 text-gray-300 sm:p-8">
          <p>{APP_NAME} respects your privacy and is committed to protecting your personal information.</p>
          <p className="mt-4">
            This Notice is intended to explain our data practices in a simple way and is designed with Uganda&apos;s Data Protection and Privacy Act, 2019 and applicable Regulations in mind. The Act regulates the collection, processing, use and disclosure of personal data and gives individuals rights concerning their information.
          </p>
        </div>
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {highlights.map(({ number, label, icon: Icon }) =>
            <div
              key={number}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5"
            >
              <Icon className="mb-4 text-blue-300" size={22} />
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500">{number}</p>
              <p className="mt-1 font-semibold text-gray-200">{label}</p>
            </div>
          )}
        </div>
        <div className="space-y-5">
          {sections.map((section) =>
            <motion.section
              key={section.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
            >
              <div className="flex gap-5">
                <span className="shrink-0 pt-1 text-sm font-semibold text-blue-300">{String(section.number).padStart(2, '0')}</span>
                <div className="min-w-0">
                  <h2 className="mb-5 text-2xl font-bold text-white">{section.title}</h2>
                  <div className="space-y-4 text-[15px] leading-7 text-gray-300">
                    {section.paragraphs?.map((paragraph) =>
                      <p key={paragraph}>{paragraph}</p>
                    )}
                    {section.items && (
                      <ul className="space-y-3 pl-5 marker:text-blue-300">
                        {section.items.map((item) => (
                          <li key={item} className="pl-2">
                            - {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.subsections?.map((subsection) => (
                      <div key={subsection.title}>
                        <h3 className="mb-2 font-semibold text-gray-200">{subsection.title}</h3>
                        <ul className="space-y-3 pl-5 marker:text-blue-300">
                          {subsection.items.map((item) => (
                            <li key={item} className="pl-2">
                              - {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </div>
      </div>
    </main>
  );
}
