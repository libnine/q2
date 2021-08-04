import { nanoid } from 'nanoid'

export const projects = [
  {
    "id": nanoid(),
    "description": "William O'Neil",
    "image": "won.png",
    "link": "https://www.oneilglobaladvisors.com",
    "name": "O'Neil Global Advisors",
    "sourceCode": "",
    "summary": "I am proud to call myself a part of the William O'Neil family.<br><br>I am a software engineer for the <i>O'Neil Global Advisors</i> arm of the company.<br><br>The company recently rolled out an <a href='https://www.prnewswire.com/news-releases/oneil-global-advisors-launches-index-tracked-by-a-wisdomtree-etf-for-growth-investing-301326503.html' target='_blank'>ETF</a> that I was happy to be a part of. I work closely in developing & maintaining databases & backend jobs for the data science & algo team."
  },
  {
    "id": nanoid(),
    "description": "Intuit",
    "image": "intuit.jpeg",
    "link": "https://www.intuit.com",
    "name": "Intuit",
    "sourceCode": "",
    "summary": "TurboTax, Quickbooks, Mint... all owned by Intuit.<br><br>I started as part of the Small Business Group, and within that department, I focused my time on data related to Quickbooks customer service agents. The agent data was mostly held with a third party service. To retrieve this data, we used their API, which ultimately involved scheduling python scripts to dump responses into JSON files. These files would later be moved to an S3 bucket once they were loaded into the Vertica database.<br><br>After my work was completed with SBG Quickbooks, I spent my time working on optimizing backend processes, mostly shell scripts & python scripts being scheduled on a linux instance.<br><br>My role has recently transitioned to Consumer Group. CG involves data related to TurboxTax managers and agents. Similar to SBG, agent activity is warehoused in Vertica. This role involves maintaining various Tableau reports and data sources."
  },
  {
    "id": nanoid(),
    "description": "Goodwill Industries",
    "image": "goodwill.png",
    "link": "https://www.goodwill.org",
    "name": "Goodwill",
    "sourceCode": "",
    "summary": "Goodwill Industries International, or Goodwill, is one of the most well known nonprofit organizations in the world. You're probably familiar with them as a donations center, but they're actually much more than that. They also focus on skill building, education, and training.<br><br>With so many moving parts in the business, the data warehouse was pretty in depth. I joined the team in the spring of 2018 to create and maintain many of the backend processes and help with reporting. The technology stack was mostly Microsoft products such as SQL Server, SSIS, SSRS (reporting), along with some in-house tools.<br><br>By fall, I was tasked with optimizing our file ingestion process across all of our environments. The original process had a SSIS job on loop, scanning the FTP folder for new files being dropped every five minutes. The new process, made with Python, was created to 'listen' for new files, which resulted in less resources and memory errors."
  }
]