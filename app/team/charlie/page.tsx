import { Navigation } from "@/components/navigation"

export default function CharliePage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Charlie Fisher</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p className="text-gray-300 mb-4">Berlin</p>
            <p className="text-gray-300 mb-4">Charlie has been investigating novel models for investing in the commons since 2013, emphasizing the use of technology in the democratisation of investment and governance tools for public infrastructures such as housing. His work highlights the necessity of shifting away from top-down urban development models that primarily benefits private landowners and towards citizen-led investment approaches. Since 2021, Charlie has collaborated on developing modular smart contracts that utilize simple bonding curves, one of which was deployed in 2023 through the Swiss Association he co-founded in Switzerland. He most recently led the Civic Tech Studio at Dark Matter Labs in which prototyping work provided valuable insights into decentralised finance mechanisms. In October 2024, Charlie was awarded the Just Open Source Grant to further explore neighbourhood wealth mechanisms in Berlin co-operative developments through novel blockchain technologies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium">PhD in Spatial Design</h3>
                <p className="text-gray-300">Oxford Brookes University | 2016-Present (estimated completion May 2025)</p>
                <p className="text-gray-300">Thesis exploring urban citizen-led affordable housing schemes in England through an exploration of the practices of human and non-human components which combine in the ongoing delivery of homes. Embracing the complexity of emergent urban phenomena, an assemblage approach (DeLanda, 2016) is used to develop a delivery practices analytic explored through the lens of housing marketisation.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">MA Development and Emergency Practice</h3>
                <p className="text-gray-300">Oxford Brookes University | 2012-2013</p>
                <p className="text-gray-300">Thesis on open source technology in housing focusing on the Wikihouse project.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">PgDip Architecture (RIBA Pt.II)</h3>
                <p className="text-gray-300">Oxford Brookes University | 2010-2013</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">BArch Architecture (RIBA Pt.I)</h3>
                <p className="text-gray-300">Leicester School of Architecture | 2006-2009</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Relevant Work Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium">Strategic Designer</h3>
                <p className="text-gray-300">Dark Matter Laboratories B.V., The Netherlands | April 2023-September 2023</p>
                <p className="text-gray-300">Contributing to research projects on the future of property, land and affordable housing in England, Portugal and South Korea. Leading the Civic Tech Studio on new technological advancements in AI and communication platforms.</p>
                <div className="mt-2">
                  <h4 className="text-lg font-medium">Key Projects:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Community-led place stewardship: Leading a three person team in a 12 month research project on long-termist stewardship entities for large-scale new residential developments</li>
                    <li>Freehouse Berlin: Leading on mechanism design to demonstrate a self-owning housing concept in Berlin</li>
                    <li>Endowing the Future: Leading research on the endowment of neighbourhoods as part of a multi-capital approach</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium">Co-Founder</h3>
                <p className="text-gray-300">Oasa, Switzerland | November 2022-Present</p>
                <p className="text-gray-300">A network of autonomous DAOs, aiming to put 100k hectares into trust of which 95% must be regenerated or untouched. Founding role in the first token-issuer trust of trusts, developed as a Swiss Association and protyped with the first tokenised land trust putting 30ha into a regenerative co-living scheme in Portugal.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Co-Founder</h3>
                <p className="text-gray-300">Collaborative Housing Hub, United Kingdom | January 2017-March 2023</p>
                <p className="text-gray-300">Founding an enabling advisory hub for Community-Led Housing in the Thames Valley area in England which took on £150k UK government seed funding and has worked with over 50 citizen-led groups. Assisted in the founding of 16 organisations and the creation of a platform for effective communication and project management of land projects.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Director</h3>
                <p className="text-gray-300">Transition by Design Co-operative, United Kingdom | May 2014-March 2023</p>
                <p className="text-gray-300">Leadership roles within an architecture practice with a focus on Passivhaus housing and retrofit. Previously held lead roles for People Operations, Research and Consultancy. Responsible for technological implementation and particularly the transformation of the business to make use of an Associates models of freelancers to supplement the core team of 8-14 people.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Relevant Training</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium">Academia</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>University-level Teaching Certification, Oxford Brookes University (2017)</li>
                  <li>Development Economics, Management and Finance (2016)</li>
                  <li>Qualitative Methods and Inquiry by Design (2016)</li>
                  <li>Philosophy of Research (2016)</li>
                  <li>ArcGIS Training - Mapping analytics software (2016)</li>
                  <li>SPSS Training - Statistical software (2016)</li>
                  <li>Nvivo Training - Qualitative analysis software (2016)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium">Business and Organisational Development</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Reframing Conflict - One day training with Outlandish (2022)</li>
                  <li>Tools for the Regenerative Renaissance - 6 week course (2021)</li>
                  <li>Organization Design Masterclass, Supermarkt Berlin (2020)</li>
                  <li>Pamwin Development Modelling Training, M3 (2020)</li>
                  <li>Accredited Community-led Housing Adviser with Chartered Institute of Housing (2018)</li>
                  <li>The One Planet Living Framework, Training, Oxford (2017)</li>
                  <li>Nonviolent Communication: Two-day Foundations Training, Shared Space (2016)</li>
                  <li>Sociocracy 3.0 Foundations Course, James Priest (2015)</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
} 