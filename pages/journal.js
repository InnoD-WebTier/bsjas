import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    }
  }
  
  render () {
	const tabData = [
      {
		title: 'BSJAS Fifth Edition',
        year: 'Spring 2015',
		cover: '/assets/2015cover.png',
        content: [
			  {
				  author: "Vidhatha Reddy",
				  title: "Family Patriarchs as Tragic Figures in the Mahabharata and Ramayana"
			  }, {
				  author: "Jinoh (Kahn) Ryu",
				  title: "Transnational Feminist Approaches to Languages and Identities of East Asian \"Third Culture Kids\" at UC Berkeley"
			  }, {
				  author: "Grayson Dimick",
				  title: "Seeking Partnership: The Development of Human Rights in Cambodia since 1993"
			  }, {
				  author: "Ari Shusterman",
				  title: "The State of Interethnic Relations in Post-Soviet Central Asia: A Cultural, Historical, and Political Perspective"
			  }, {
				  author: "Malayandi Palaniappan",
				  title: "The Friendship of Karna and Duryodhana in the Mahabharata"
			  }, {
				  author: "Veena Bhatia",
				  title: "The Ethicality of Chinese Investment in the Democratic Republic of the Congo: The Realist and Cosmopolitan Perspective"
			  }
		  ]
      }, {
		title: 'BSJAS Fourth Edition',
        year: 'Spring 2014',
		cover: '/assets/2014cover.png',
        content: [
			  {
				  author: "Marisa Mito",
				  title: "Defiant Wives: Reading Transgressive Marriage in the Hindu Tradition"
			  }, {
				  author: "Maya Agarwal",
				  title: "Two Versions of the Ramayana and the Concept of the Lokasamgraha"
			  }, {
				  author: "Pisacha Wichianchan",
				  title: "The Damned Politics of Sarawak: Rethinking the Bakun Megaproject in Malaysia"
			  }, {
				  author: "Hoo Ri Kim",
				  title: "An Assessment of the Conflict Management Tools of the Korean Conflict"
			  }, {
				  author: "Yuma Kuwata",
				  title: "Policy Recommendation for the U.S. Government in Reaction to Japan's Possible Nuclear Energy Policy Reformation"
			  }
		  ]
      }, {
		title: 'BSJAS Third Edition',
        year: 'Spring 2013',
		cover: '/assets/2013cover.png',
        content: [
			  {
				  author: "Kankan Xie",
				  title: "How Does Ethnicity Affect Current China-Malaysia Relations?"
			  }, {
				  author: "Mark Portillo",
				  title: "Constructing \"Culture\""
			  }, {
				  author: "Rachel Phoa",
				  title: "The Success of Environmental NGOs in Suharto's Indonesia"
			  }, {
				  author: "Ramanathan Veerappan",
				  title: "The Relevance of Kautilya's Arthashastra"
			  }, {
				  author: "Valerie Black",
				  title: "Ainu and the Metaphors of Indigeneity: Land, History, Science, Law and Bodies"
			  }, {
				  author: "Robert Bowers Curl",
				  title: "Not so Singular: Laicization in Japanese Buddhism and Parallels in South Asia"
			  }
		  ]
      }, {
		title: 'BSJAS Second Edition',
        year: 'Spring 2012',
		cover: '/assets/2012cover.png',
        content: [
			  {
				  author: "Dawei Ding",
				  title: "A Sociopolitical and Economic Analysis of Recent Shanghai Policies on Hukou and Migrant Worker Insurance"
			  }, {
				  author: "Tara Yarlagadda",
				  title: "An Analysis of State-based Narratives in Pakistani and Indian Textbooks"
			  }, {
				  author: "Muyang Chen",
				  title: "The Current Buraku Issue in Tokyo and Its Solutions"
			  }, {
				  author: "Benjamin Knight",
				  title: "Deconstructing Japan's Military Globalism: The March to \"Normal\" Nationhood"
			  }
		  ]
      }, {
		title: 'BSJAS Inaugural Edition',
        year: 'Fall 2010',
		cover: '/assets/2010cover.png',
        content: [
			  {
				  author: "James Lin",
				  title: "Soviet Internationalism, Chinese Nationalism, and Early Kuomintang Struggles"
			  }, {
				  author: "Alessandro Tiberio",
				  title: "Becoming Taiwanese"
			  }, {
				  author: "Andrea Horbinski",
				  title: "The Tokyo Tribunal"
			  }, {
				  author: "Nina Tompkin",
				  title: "Professor Interview featuring Lanchih Po"
			  }
		  ]
      },
	  
    ];

    const handleClick = (index) => {
      this.setState({
        activeTab: index,
      });
    }

    const tabs = () => {
      let tabs = [{title: 'Spring 2015'}, {title: 'Spring 2014'}, {title: 'Spring 2013'}, {title: 'Spring 2012'}, {title: 'Fall 2010'}];
      const HTMLify = function (item, i) {
        return (
			<div
			  key={i}
			  onClick={() => handleClick(i)}
			  className = "tab"
			>
			  {item.title}
			</div>
        );
      }
      return (
		<div className="tab-nav">
		  {tabs.map(HTMLify)}
		</div>
	  );
    }

    const tabContent = () => {
      const activeTab = this.state.activeTab;
      const data = tabData[activeTab];
	  const content = function (item) {
		return (
		  <div>
			<div className="author">
			  {item.author}
			</div>
			
			<div className="title">
			  {item.title}
			</div>
		  </div>
		);
	  }
      return (
        <div className="tab-content">
		  <div className="tab-title">
		    {data.title}
		  </div>
		  
		  	<img className="cover-img" src={data.cover} />

		  
		  {data.content.map(content)}
		</div>
      );
    }
	
    return (
      <div className="">
        <Helmet
          title={config.siteTitle}
        />
		
		<div className="content-header">
          <span>Journal / </span>
          <span className="subheader">Recent Publications</span>
        </div>
		
		<div className="journals">
		  {tabs()}
		  {tabContent()}
		</div>
		
        <div className="submit">
		  <div className="content-header">
            <span>Journal / </span>
            <span className="subheader">Submit</span>
          </div>
		
		  <div className="question">
			What is the Berkeley Student Journal of Asian Studies?
		  </div>
		  <div className="answer">
			The Berkeley Student Journal of Asian Studies (BSJAS) is an Institute of East Asian Studies sponsored journal that strives both to showcase the best undergraduate and graduate work at Berkeley in the field of Asian Studies and to give students aspiring to a future in academia a chance to practice the process of submission to a journal.
		  </div>

		  <div className="question">
			Who is eligible to submit an entry?
		  </div>
		  <div className="answer">
			We encourage submissions from graduate and undergraduate students currently enrolled at the University of California, Berkeley, or that have graduated within the past 12 months. Submissions can be from any discipline, as long as they are related to Asia and are original research.
		  </div>

		  <div className="question">
			When is the submission deadline?
		  </div>
		  <div className="answer">
			The current deadline is January 16, 2016.
		  </div>

		  <div className="question">
			What is the submission process?
		  </div>
		  <div className="answer">
			The applicant first submits a publication for selection under the review of the Journal Committee.<br/><br/>
			
If selected, the Journal Committee will correspond with the student to involve a Berkeley faculty member, who provides support to the student in the editing process by providing comments and additional feedback for final publication.<br/><br/>

Your submission(s) must be completed for publication by the deadline set by the Journal Committee. The student will be notified of the opportunity to participate in a research symposium hosted by Berkeley Student Journal for Asian Studies.
		  </div>

		  <div className="question">
			What is considered an entry for submission?
		  </div>
		  <div className="answer">
			While the Journal aims to showcase original research papers, book reviews, film reviews, etc., we also review creative works (e.g. art, poetry, photojournalism). Students wishing to interview selected faculty or submit cover art, are also invited to submit. The Journal Committee welcomes entries with relevance to “Asia,” as defined geographically by regions spanning East Asia, South and Southeast Asia, and Central Asia. If you are unsure if you work is relevant and eligible, feel free to contact us at <span className="blip">berkeleysjas@gmail.com</span> for clarification.
		  </div>

		  <div className="question">
			Is there a specific format for submission?
		  </div>
		  <div className="answer">
			Please submit documents in pdf format (for images, submit in TIFF, PNG, or JPEG format) to <span className="blip">berkeleysjas@gmail.com</span>. Title the file YourName.pdf. Submissions must include a cover page with the author’s name, discipline, year in school, and formatted with one-inch margins, single-spaced, and Times New Roman 12 point font. Manuscripts must be from 1750-7500 words, and must include a 250 word abstract at the beginning of the document.<br/><br/>
			
Article manuscripts must adhere to the Chicago Manual of Style. This means that submissions must have footnote citations and a works cited page.<br/><br/>

Email all submissions to <span className="blip">berkeleysjas@gmail.com</span>. The subject line should say “BSJAS Entry: Paper Title”. The body of the email must include the following<br/>

Author’s Full name
Year (or date of graduation if recently matriculated)
Major or Area of Study
Title of Paper
		  </div>

		  <div className="question">
			What determines selection and publication?
		  </div>
		  <div className="answer">
			Each piece of work is evaluated by the following criteria:<br/>
Originality of work
Assertion of a clear and significant argument
Quality of the evidence provided to support claims
Organization of ideas in guiding readers’ understanding
Grammar, syntax, spelling
Moreover, while the Journal Committee chooses to evaluate each submission based on several criteria, we also approach and evaluate each entry holistically (particularly for creative works).
		  </div>

		  <div className="question">
			Who is involved in the selection committee?
		  </div>
		  <div className="answer">
			The Journal Committee is composed of student scholars involved in Asia-related studies, both undergraduate and graduate.
		  </div>

		  <div className="question">
			What if I miss the deadline for submission?
		  </div>
		  <div className="answer">
			Students are encouraged to submit papers at any time up the deadline. However, if you miss our hard deadline (January 16, 2016 at 11:59 pm), then you will not be eligible for publication in this year’s edition of the journal. However, you may still be eligible for publication the following year.<br/><br/>
If you are unsure of the deadline please email us at <span className="blip">berkeleysjas@gmail.com</span> and we will inform you.
		  </div>

		  <div className="question">
			Is work from previous semesters eligible?
		  </div>
		  <div className="answer">
			Yes. In our aim to collect Asia-related work, pieces for review and selection do not have to be from the past or current semester. As long as the information provided in the work remains factually correct, submissions need not be time-sensitive.
		  </div>

		  <div className="question">
			If I submitted a paper last semester for selection, should I submit it again?
		  </div>
		  <div className="answer">
			Because we do accept work on a rolling basis, it would be best to notify us again during the submission period in the following semester if you wish to be included in the applicant pool. In regards to work that was reviewed but not selected, it would be best if changes were made to improve the work before submitting it once more.
		  </div>

		  <div className="question">
			How many pieces are selected?
		  </div>
		  <div className="answer">
			Our journal is not currently maintained at any specified length. Historically, the committee has accepted between 4 and 6 papers, but this number is subject to change, depending on the number and quality of submissions. When selecting, we do take into consideration the academic level of the applicant, the topic of the submission, and the type of submission piece.
		  </div>

		  <div className="question">
			How often does the journal get published?
		  </div>
		  <div className="answer">
			The Berkeley Student Journal of Asian Studies publishes once a year in the spring.
		  </div>
		</div>
		
	  </div>
    );
  }
}

export default Journal;
