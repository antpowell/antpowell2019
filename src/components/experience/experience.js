import React from 'react';
import './experience.css';

const Experience = () => {
	return (
		<section className="mh7">
			<h1 className="f1 fw2 b color_accent">Work Experience</h1>
			<div className="content">
				<div>
					<h3 className="f3 fw5">
						Software Engineer Intern{' '}
						<div className="company_details color_accent">
							<div className="company i b fw2">
								Microsoft, 2018 |{' '}
								<a className="company_location" href>
									Redmond, WA.
								</a>
							</div>

							<div className="company_description f6"></div>
						</div>
					</h3>

					<div className="f4 accomplishments fw3">
						<p className="summary">
							Designed, developed, documented, and published, to NPM, a cross-browser compatible client-side mixed reality image feature
							using Typescript for BabylonJS, an open-source 3D engine built on WebGL, JavaScript, and TypeScript, from the ground-up. This
							feature increased the accessibility of people with lower-end PCs to enjoy 3D creations by allowed creators to export an
							animated GIF of their 3D creation as a less resource-intensive option to share their creations with clients, partners,
							friends, and families.
						</p>
						<p>
							Published, to production, a GIF library for Microsoft's BabylonJS via{' '}
							<a href="https://www.npmjs.com/package/babylonjs-gifexporter">NPM</a> and <a href="https://github.com/antpowell">Github</a>
						</p>
						<p>Committed to Microsoft's open source project BabylonJS</p>
						<p>Collaborated across multiple teams throughout the organization to accomplish the mission.</p>
					</div>
				</div>
				<div>
					<h3 className="f3 fw5">
						Software Engineer Intern
						<div className="company_details color_accent">
							<div className="company i b fw2">
								Verizon Corp., 2017 |{' '}
								<a href className="company_location">
									Alpharetta, GA.
								</a>
							</div>

							<p className="company_description f6"></p>
						</div>
					</h3>

					<div className="f4 accomplishments fw3">
						<p>
							Transitioned existing tightly coupled products to a series of standalone, independently deployable applications with Angular.
						</p>
						<p>Implemented E2E and unit testing of application in accordance with best practices to create project testing standards.</p>
						<p>Researched and implemented methods to reduce application client-side loading/response time.{` `}</p>
						<p>Facilitated project vision by modeling user behavior and creating a rich user experience on both desktop and mobile.</p>
					</div>
				</div>
				<div>
					<h3 className="f3 fw5">
						Senior Systems Engineer / Graduate Student Researcher
						<div className="company_details">
							<div className="company i b fw2 color_accent">
								Texas Southern University , 2013 - 2018 |{' '}
								<a href className="company_location">
									Houston, TX.
								</a>
							</div>

							<div className="company_description f6 fw1 color_accent">
								National Science Foundation Center for Research on Complex Networks CREST Center at TSU
							</div>
						</div>
					</h3>

					<div className="f4 accomplishments fw3">
						<p className="summary">
							Developed and managed an Attendance Management System for research purposes that was eventually utilized University-wide at
							Texas Southern University serving over 3000 students and over 70 instructors.
						</p>
						<p>
							Collaborate with students, faculty, and staff to improve and add requested features to attendance system that lead to 78%
							increase in adoption rate over a 2-year period.
						</p>
						<p>
							Taught, manage, and inspired a team of student software developers in the creation, deployment, and daily operation of a
							University-wide attendance system that lead to 100% of the students achieving gainful employment with reputable companies.
						</p>
						<p>Reduced system run time by 87% by creating companion mobile applications that reduced user input error by over 60%.</p>
						<p>Effectively taught grade school and undergraduate students how to develop Android applications.</p>
					</div>
				</div>
				<div>
					<h3 className="f3 fw5">
						Military Police Investigator (Sergeant)
						<div className="company_details">
							<div className="company i b fw2 color_accent">
								Texas Army National Guard, 2009 - Present |{' '}
								<a href className="company_location">
									Texas
									<div className="company_description f6">Security Clearance: Secret</div>
								</a>
							</div>
						</div>
					</h3>

					<div className="f4 accomplishments fw3">
						<p className="summary">12 years of honorable service</p>
						<p>
							Completed two 12-month deployments, participating in 200+ reconnaissance missions supporting counter-insurgency operations.
						</p>
						<p>Served as NCOIC for the Joint Detention Group-GTMO Military Police Investigations office.</p>
						<p>Recognized by Terrorism & Criminal Investigation Unit Director for excellence in supporting TCIU's and CID's mission.</p>
						<p>
							Actively participated in joint criminal investigations and was liaison for FBI, CID, and other state and federal law
							enforcement agencies.
						</p>
						<p>Trained, advised, and motivated over 500+ Soldiers in 12+ years of service.</p>
					</div>
				</div>
				<div>
					<h3 className="f3 fw5">
						B.S. in Computer Science
						<div className="company_details">
							<div className="company i b fw2 color_accent">
								Texas Southern University, 2017 |{' '}
								<a href className="company_location">
									Houston, TX.
								</a>
							</div>

							<p className="company_description f6"></p>
						</div>
					</h3>

					<div className="f4 accomplishments fw3"></div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
