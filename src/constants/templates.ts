export const templates = [
    {
        id: "blank",
        label: "Blank Document",
        imageUrl: "/blank-document.svg",
        initialContent: ``,
    },
    {
        id: "software-proposal",
        label: "Software Development Proposal",
        imageUrl: "/software-proposal.svg",
        initialContent: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h1 style="color: #2c3e50;">Software Development Proposal</h1>
      <p><strong>Date:</strong> [Insert Date]</p>
      <p><strong>Prepared for:</strong> [Client Name]</p>
      <p><strong>Prepared by:</strong> [Your Name/Company]</p>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

      <h2 style="color: #34495e;">Executive Summary</h2>
      <p>Provide a high-level summary of the project goals, challenges, and proposed solution.</p>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

      <h2 style="color: #34495e;">Project Objectives</h2>
      <ul>
        <li>Objective 1</li>
        <li>Objective 2</li>
        <li>Objective 3</li>
      </ul>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

      <h2 style="color: #34495e;">Proposed Solution</h2>
      <p>Describe the technical approach, methodology, and tools that will be used to deliver the solution.</p>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

      <h2 style="color: #34495e;">Timeline</h2>
      <table style="width:100%; border-collapse: collapse; margin: 10px 0;">
        <thead>
          <tr style="background: #f9f9f9;">
            <th style="border: 1px solid #ddd; padding: 8px;">Phase</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Duration</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Deliverables</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Planning</td>
            <td style="border: 1px solid #ddd; padding: 8px;">[Timeframe]</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Requirements Document</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Development</td>
            <td style="border: 1px solid #ddd; padding: 8px;">[Timeframe]</td>
            <td style="border: 1px solid #ddd; padding: 8px;">MVP</td>
          </tr>
        </tbody>
      </table>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

      <h2 style="color: #34495e;">Cost Estimate</h2>
      <table style="width:100%; border-collapse: collapse; margin: 10px 0;">
        <thead>
          <tr style="background: #f9f9f9;">
            <th style="border: 1px solid #ddd; padding: 8px;">Item</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Development</td>
            <td style="border: 1px solid #ddd; padding: 8px;">$X,XXX</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Testing</td>
            <td style="border: 1px solid #ddd; padding: 8px;">$X,XXX</td>
          </tr>
        </tbody>
      </table>

      <p><em>Thank you for considering this proposal.</em></p>
    </div>`,
    },
    {
        id: "project-proposal",
        label: "Project Proposal",
        imageUrl: "/project-proposal.svg",
        initialContent: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h1 style="color: #2c3e50;">Project Proposal</h1>
      <p><strong>Date:</strong> [Insert Date]</p>
      <p><strong>Prepared for:</strong> [Client/Organization Name]</p>
      <p><strong>Prepared by:</strong> [Your Name/Team]</p>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

      <h2 style="color: #34495e;">Introduction</h2>
      <p>Provide context and background information relevant to the project.</p>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

      <h2 style="color: #34495e;">Goals & Objectives</h2>
      <ul>
        <li>Goal 1</li>
        <li>Goal 2</li>
        <li>Goal 3</li>
      </ul>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

      <h2 style="color: #34495e;">Scope of Work</h2>
      <p>Define the boundaries, deliverables, and responsibilities of the project.</p>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

      <h2 style="color: #34495e;">Timeline</h2>
      <table style="width:100%; border-collapse: collapse; margin: 10px 0;">
        <thead>
          <tr style="background: #f9f9f9;">
            <th style="border: 1px solid #ddd; padding: 8px;">Phase</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Start Date</th>
            <th style="border: 1px solid #ddd; padding: 8px;">End Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Planning</td>
            <td style="border: 1px solid #ddd; padding: 8px;">[Start]</td>
            <td style="border: 1px solid #ddd; padding: 8px;">[End]</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Execution</td>
            <td style="border: 1px solid #ddd; padding: 8px;">[Start]</td>
            <td style="border: 1px solid #ddd; padding: 8px;">[End]</td>
          </tr>
        </tbody>
      </table>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

      <h2 style="color: #34495e;">Budget</h2>
      <table style="width:100%; border-collapse: collapse; margin: 10px 0;">
        <thead>
          <tr style="background: #f9f9f9;">
            <th style="border: 1px solid #ddd; padding: 8px;">Category</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Estimated Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Labor</td>
            <td style="border: 1px solid #ddd; padding: 8px;">$X,XXX</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Materials</td>
            <td style="border: 1px solid #ddd; padding: 8px;">$X,XXX</td>
          </tr>
        </tbody>
      </table>

      <p><em>This proposal is submitted for your review and approval.</em></p>
    </div>`,
    },
    {
        id: "business-letter",
        label: "Business Letter",
        imageUrl: "/business-letter.svg",
        initialContent: `<div style="font-family: 'Georgia', serif; line-height: 1.7; color: #2c2c2c; max-width: 700px; margin: 0 auto; font-size: 15px;">
    <p style="margin-bottom: 4px;"><strong>[Your Name]</strong></p>
    <p style="margin: 0;">[Your Address]</p>
    <p style="margin: 0;">[City, State, ZIP Code]</p>
    <p style="margin: 0;">Email: <a href="mailto:[Your Email]" style="color: #0066cc; text-decoration: none;">[Your Email]</a></p>
    <p style="margin: 0;">Phone: [Your Phone Number]</p>

    <p style="margin-top: 20px;">[Date]</p>

    <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;" />

    <p style="margin-bottom: 4px;"><strong>[Recipient Name]</strong></p>
    <p style="margin: 0;">[Recipient Title]</p>
    <p style="margin: 0;">[Company Name]</p>
    <p style="margin: 0;">[Address Line 1]</p>
    <p style="margin: 0;">[City, State, ZIP Code]</p>

    <p style="margin-top: 20px;">Dear [Recipient Name],</p>

    <p>
      I am writing to [clearly state the purpose of your letter]. I hope this message finds you well.  
    </p>

    <p>
      [Provide a clear and concise explanation of your main point. Keep sentences professional, polite, and to the point. If you are making a request, specify it in detail. If you are sharing information, structure it logically.]
    </p>

    <p>
      Please let me know if you need any additional information. I look forward to your response and appreciate your time and attention to this matter.
    </p>

    <p style="margin-top: 30px;">Sincerely,</p>
    <p style="margin-top: 40px;"><strong>[Your Full Name]</strong></p>
  </div>`,
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: "/resume.svg",
        initialContent: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h1 style="color: #2c3e50;">[Your Full Name]</h1>
      <p><strong>Email:</strong> [Your Email] | <strong>Phone:</strong> [Your Phone Number]</p>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

      <h2 style="color: #34495e;">Summary</h2>
      <p>A concise summary highlighting your skills, experience, and career objectives.</p>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

      <h2 style="color: #34495e;">Experience</h2>
      <h3>[Job Title] – [Company Name]</h3>
      <p><em>[Start Date] – [End Date]</em></p>
      <ul>
        <li>Responsibility or achievement 1</li>
        <li>Responsibility or achievement 2</li>
      </ul>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

      <h2 style="color: #34495e;">Education</h2>
      <p>[Degree], [Institution], [Graduation Year]</p>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

      <h2 style="color: #34495e;">Skills</h2>
      <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
      </ul>
    </div>`,
    },
    {
        id: "cover-letter",
        label: "Cover Letter",
        imageUrl: "/cover-letter.svg",
        initialContent: `<div style="font-family: 'Georgia', serif; line-height: 1.7; color: #2c2c2c; max-width: 700px; margin: 0 auto; font-size: 15px;">
    <p style="margin-bottom: 4px;"><strong>[Your Name]</strong></p>
    <p style="margin: 0;">[Your Address]</p>
    <p style="margin: 0;">[City, State, ZIP Code]</p>
    <p style="margin: 0;">Email: <a href="mailto:[Your Email]" style="color: #0066cc; text-decoration: none;">[Your Email]</a></p>
    <p style="margin: 0;">Phone: [Your Phone Number]</p>

    <p style="margin-top: 20px;">[Date]</p>

    <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;" />

    <p style="margin-bottom: 4px;"><strong>[Hiring Manager's Name]</strong></p>
    <p style="margin: 0;">[Company Name]</p>
    <p style="margin: 0;">[Company Address Line 1]</p>
    <p style="margin: 0;">[City, State, ZIP Code]</p>

    <p style="margin-top: 20px;">Dear [Hiring Manager's Name],</p>

    <p>
      I am writing to express my strong interest in the <strong>[Job Title]</strong> position at <strong>[Company Name]</strong>. With my background in [relevant field/skills], I am confident in my ability to contribute effectively to your team.
    </p>

    <p>
      Over the course of my career, I have gained valuable experience in [specific areas relevant to the role]. My ability to [highlight 1–2 key skills or achievements] aligns closely with the requirements outlined for this role. I am particularly drawn to [Company Name] because of [specific reason—e.g., its reputation, culture, projects, or values].
    </p>

    <p>
      I would greatly appreciate the opportunity to further discuss how my qualifications align with your team’s needs. Thank you for considering my application.
    </p>

    <p style="margin-top: 30px;">Sincerely,</p>
    <p style="margin-top: 40px;"><strong>[Your Full Name]</strong></p>
  </div>`,
    },
    {
        id: "letter",
        label: "Letter",
        imageUrl: "/letter.svg",
        initialContent: `<div style="font-family: 'Times New Roman', serif; line-height: 1.7; color: #2c2c2c; max-width: 700px; margin: 0 auto; font-size: 15px;">
    <p style="margin-bottom: 4px;"><strong>[Your Name]</strong></p>
    <p style="margin: 0;">[Your Address]</p>
    <p style="margin: 0;">[City, State, ZIP Code]</p>

    <p style="margin-top: 20px;">[Date]</p>

    <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;" />

    <p style="margin-bottom: 4px;"><strong>[Recipient Name]</strong></p>
    <p style="margin: 0;">[Recipient Address Line 1]</p>
    <p style="margin: 0;">[Recipient City, State, ZIP Code]</p>

    <p style="margin-top: 20px;">Dear [Recipient Name],</p>

    <p>
      I hope this letter finds you well. I am writing to [state purpose of the letter].  
    </p>

    <p>
      [Provide the main content of your letter here. Keep it polite, professional, and concise. Clearly outline your thoughts, requests, or updates, and structure your message in a way that is easy to follow.]
    </p>

    <p>
      Thank you for taking the time to read my letter. I look forward to your response.  
    </p>

    <p style="margin-top: 30px;">Best regards,</p>
    <p style="margin-top: 40px;"><strong>[Your Full Name]</strong></p>
  </div>`,
    },
];
