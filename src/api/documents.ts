type TLegalDocument = {
  id: string;
  title: string;
  type: string;
  content: string;
  dateCreated: string; // you can also use Date if you want actual Date objects
};

export const MOCK_DOCUMENTS: TLegalDocument[] = [
  {
    id: '1',
    title: 'Non-Disclosure Agreement (NDA)',
    type: 'NDA',
    content: `This Non-Disclosure Agreement ("Agreement") is entered into as of the date of last signature by and between the parties. Party A agrees to receive confidential information from Party B under the terms specified herein. All information disclosed shall be protected by the receiving party with reasonable care and shall not be disclosed to third parties without explicit written consent. The term of this agreement extends for a period of three years from the date of disclosure. Exceptions to confidentiality obligations include information that is publicly available, independently developed, or required to be disclosed by law. Upon termination, all confidential materials must be returned or destroyed upon written request. Breach of this agreement may result in injunctive relief and monetary damages.`,
    dateCreated: '2024-01-15'
  },
  {
    id: '2',
    title: 'Service Agreement',
    type: 'Contract',
    content: `SERVICE AGREEMENT: This Agreement sets forth the terms under which Services shall be provided by the Service Provider to the Client. The Service Provider agrees to provide professional services as detailed in the attached Scope of Work. Payment shall be made within 30 days of invoice receipt via wire transfer or check. Either party may terminate this agreement with 30 days written notice to the other party. The Service Provider warrants that all services shall be performed in a professional and timely manner consistent with industry standards. Limitation of Liability: Neither party shall be liable for indirect, incidental, consequential, or punitive damages arising from this agreement. The total liability of either party shall not exceed the fees paid in the preceding 12 months.`,
    dateCreated: '2024-02-10'
  },
  {
    id: '3',
    title: 'Terms of Service',
    type: 'Terms',
    content: `TERMS OF SERVICE: By accessing and using this platform, you agree to be bound by these terms. Users must be at least 18 years old or have obtained parental consent. All content on this platform is provided "as is" without warranties of any kind. You agree not to engage in unlawful conduct or violate intellectual property rights of others. We reserve the right to suspend or terminate accounts that violate these terms at our sole discretion. All disputes arising from these terms shall be resolved through binding arbitration. These terms are effective immediately and remain in effect until modified. Any modification to these terms will be effective 30 days after posting. By continuing to use the service, you accept the modified terms.`,
    dateCreated: '2024-01-20'
  }
];

export function searchDocuments(query: string): LegalDocument[] {
  if (!query.trim()) return [];
  
  const lowerQuery = query.toLowerCase();
  return MOCK_DOCUMENTS.filter(doc => 
    doc.title.toLowerCase().includes(lowerQuery) ||
    doc.type.toLowerCase().includes(lowerQuery) ||
    doc.content.toLowerCase().includes(lowerQuery)
  );
}
