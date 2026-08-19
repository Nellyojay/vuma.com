import { motion } from 'framer-motion';
import { FileText, Scale, ShieldCheck } from 'lucide-react';
import ScrollToTop from '../../constants/scrollToTop';
import { APP_NAME } from '../constants/company-name';

type TermsSection = {
  number: number;
  title: string;
  paragraphs?: string[];
  items?: string[];
};

const sections: TermsSection[] = [
  { number: 1, title: 'Eligibility', paragraphs: ['You must provide accurate information when creating your account.', `You must meet the minimum age required by applicable Ugandan law and ${APP_NAME}'s age requirements.`, `If you are a minor, use of ${APP_NAME} must comply with applicable requirements concerning parental or guardian consent. Uganda's Data Protection and Privacy Act places specific requirements on processing children's personal data.`] },
  { number: 2, title: 'Your Account', paragraphs: ['You are responsible for:'], items: ['Keeping your password and login credentials secure.', 'Providing accurate information.', 'Maintaining the security of your device and account.', `All activity carried out through your account, unless caused by ${APP_NAME}'s failure to apply reasonable security measures.`] },
  { number: 3, title: 'User Content', paragraphs: [`You retain ownership of content you create and upload to ${APP_NAME}.`, `By uploading content, you give ${APP_NAME} a non-exclusive, worldwide, royalty-free licence to host, store, reproduce, process, display and distribute that content as reasonably necessary to operate and improve the ${APP_NAME} service.`, `This licence does not give ${APP_NAME} ownership of your content.`, 'You are responsible for ensuring that you have the necessary rights and permissions for anything you upload.'] },
  { number: 4, title: 'Prohibited Content and Conduct', paragraphs: [`You must not use ${APP_NAME} to:`], items: ['Harass, threaten, stalk or intimidate others.', 'Impersonate individuals or organisations.', "Publish another person's private information without authorization.", "Upload content that infringes another person's copyright or other rights.", 'Commit fraud or facilitate illegal activities.', `Distribute malware or attempt to compromise ${APP_NAME}.`, 'Circumvent security or access accounts belonging to others.', 'Send spam or abusive unsolicited communications.', 'Upload unlawful, exploitative or extremely harmful content.', `Use ${APP_NAME} for activities prohibited by Ugandan law.`] },
  { number: 5, title: 'Messaging', paragraphs: [`${APP_NAME} may provide private or group messaging.`, 'Users should understand that private messaging does not guarantee absolute confidentiality.', `Messages may be processed and stored by ${APP_NAME} and its technology providers to provide the messaging service, prevent abuse, maintain security, comply with legal obligations and investigate reported violations.`, `Users should not send passwords, financial credentials, confidential business information or other highly sensitive information through ${APP_NAME} unless they understand the risks.`] },
  { number: 6, title: 'Posts, Comments and Interactions', paragraphs: [`${APP_NAME} provides tools for posting, commenting, liking, following and other interactions.`, `${APP_NAME} does not guarantee that information posted by users is accurate, complete or trustworthy.`, `User-generated content represents the views of the relevant user, not necessarily the views of ${APP_NAME}.`] },
  { number: 7, title: 'Businesses and Third-Party Users', paragraphs: [`${APP_NAME} may allow businesses, creators and other users to create profiles and promote products or services.`, `${APP_NAME} does not automatically guarantee:`], items: ['The quality of a product or service.', 'The legitimacy of a seller.', 'The accuracy of a business profile.', 'The availability of a product.', 'That a transaction between users will be completed successfully.'] },
  { number: 8, title: 'Payments', paragraphs: [`If ${APP_NAME} introduces payments or paid services, additional payment, refund and transaction terms may apply.`, `${APP_NAME} is not responsible for losses resulting from a user's voluntary transfer of money to another user where ${APP_NAME} has not expressly provided or guaranteed the transaction.`, `Where ${APP_NAME} itself supplies goods or services through electronic transactions, applicable Ugandan consumer-protection requirements will apply. Uganda's Electronic Transactions Act includes requirements concerning information supplied to consumers and electronic transactions.`] },
  { number: 9, title: 'Intellectual Property', paragraphs: [`${APP_NAME}'s software, branding, logos, design, graphics and other ${APP_NAME}-owned materials remain the property of ${APP_NAME} or their respective owners.`, `You may not copy, modify, reverse engineer, redistribute or commercially exploit ${APP_NAME}'s proprietary materials without permission, except where permitted by law.`] },
  { number: 10, title: `Availability of ${APP_NAME}`, paragraphs: [`${APP_NAME} is an evolving startup product.`, 'We do not guarantee that:'], items: [`${APP_NAME} will always be available.`, 'Every feature will always work.', 'Data will never be lost.', 'Notifications will always be delivered.', 'Messages will always be delivered instantly.', 'Third-party services will always operate.', `${APP_NAME} will remain unchanged.`] },
  { number: 11, title: 'Account Suspension and Termination', paragraphs: [`You may stop using ${APP_NAME} at any time.`, `${APP_NAME} may suspend, restrict or terminate an account where necessary to:`], items: ['Protect users.', 'Prevent fraud or abuse.', 'Enforce these Terms.', `Protect ${APP_NAME}'s systems.`, 'Comply with applicable law.'] },
  { number: 12, title: 'Limitation of Responsibility', paragraphs: [`To the extent permitted by law, ${APP_NAME} is not responsible for losses arising from:`], items: ['User-generated content.', 'Interactions between users.', 'Fraud committed by users.', 'Third-party services.', 'Internet or network failures.', 'Device failures.', 'Unauthorized access caused by compromised user credentials.', 'Temporary service interruptions.'] },
  { number: 13, title: 'Privacy', paragraphs: [`Your use of ${APP_NAME} is also governed by our Privacy and Security Notice below.`, 'The Privacy Notice explains what information we collect, why we collect it, how it is used, how it is protected and your rights concerning your personal data.'] },
  { number: 14, title: 'Changes to These Terms', paragraphs: [`We may update these Terms as ${APP_NAME} develops or as legal requirements change.`, `Material changes will be communicated through ${APP_NAME} or another reasonable method.`, `Continued use of ${APP_NAME} after the effective date of updated Terms constitutes acceptance, subject to applicable law.`] },
  { number: 15, title: 'Governing Law', paragraphs: ['These Terms are intended to operate under the laws of Uganda.', `Disputes should first be raised with ${APP_NAME} so that we have a reasonable opportunity to resolve them.`, 'Nothing in these Terms prevents a user from exercising rights available under Ugandan law.'] },
  { number: 16, title: `${APP_NAME}'s Current Business Status`, paragraphs: [`${APP_NAME} is currently an early-stage startup project and may be operated before formal incorporation of a separate company.`, `Where a legal entity has not yet been incorporated, references to "${APP_NAME}", "we" or "us" refer to the person or persons legally responsible for operating the ${APP_NAME} platform.`, `As ${APP_NAME} grows, its ownership, legal structure, registrations and regulatory compliance may be formalised or transferred to an incorporated entity.`, `This statement does not limit any legal rights or obligations applicable to ${APP_NAME} or its operators.`] },
];

const highlights = [
  { number: '01', label: 'Read the terms', icon: FileText },
  { number: '02', label: 'Know your rights', icon: ShieldCheck },
  { number: '03', label: `Use ${APP_NAME} responsibly`, icon: Scale },
];

export function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-black px-4 pb-24 pt-32 text-white sm:px-6 lg:px-8">
      <ScrollToTop />
      <div className="mx-auto max-w-5xl">
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12 border-b border-white/10 pb-10">
          <div className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-300"><Scale size={18} /> Legal document</div>
          <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">{APP_NAME} Terms and Conditions</h1>
          <p className="max-w-2xl text-lg leading-8 text-gray-400">The rules that help keep {APP_NAME} useful, respectful and safe for everyone.</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-300"><span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Effective date: 19 August 2026</span><span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Last updated: 19 August 2026</span></div>
        </motion.header>
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
                <span
                  className="shrink-0 pt-1 text-sm font-semibold text-blue-300"
                >
                  {String(section.number).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h2 className="mb-5 text-2xl font-bold text-white">{section.title}</h2>
                  <div className="space-y-4 text-[15px] leading-7 text-gray-300">
                    {section.paragraphs?.map((paragraph) =>
                      <p key={paragraph}>{paragraph}</p>)
                    }

                    {section.items &&
                      <ul className="space-y-3 pl-5 marker:text-blue-300">
                        {section.items.map((item) =>
                          <li key={item} className="pl-2">{item}</li>
                        )}
                      </ul>
                    }
                  </div>
                </div>
              </div>
            </motion.section>)
          }
        </div>
      </div>
    </main>
  );
}
