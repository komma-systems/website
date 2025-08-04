import { Navigation } from "@/components/navigation"

export default function ClaraPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Clara Gromaches</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p className="text-gray-300 mb-4">Barcelona, Spain, 1990</p>
            <p className="text-gray-300 mb-4">With a background as regen architect and social housing incubator I leverage the power of self-organisation and decentralised technology to bring housing and land commons to mainstream to advance into having more fair, regen and sovereign societies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Blockchain Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium">Community-Led Housing & Blockchain Consultant</h3>
                <p className="text-gray-300">Independent, remote | Jan 2024-Present</p>
                <p className="text-gray-300">Advising organizations, start-ups and entrepreneurs on their community-led housing (co-living, pop-up cities, permanent residences) projects using blockchain enabled mechanisms.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">DAO People Ops & Operations Lead</h3>
                <p className="text-gray-300">deng service DAO, remote | December 2021-Present</p>
                <p className="text-gray-300">Leading system improvements for enhanced member and client success, business development strategies and partnerships, org cross-team coordination, and optimizing DAO governance as organization runs as a workers co-operative.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Co-founder, Product Design</h3>
                <p className="text-gray-300">Communitaz, remote | Feb 2020-April 2020</p>
                <p className="text-gray-300">SaaS to create and manage housing co-operatives as DAOs, project started at Blockchain for Social Impact (BSI) Hackaton.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Architecture and Housing Commons</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium">Cohousing/Co-operative Housing Incubator</h3>
                <p className="text-gray-300">Independent, Barcelona (Spain) | Jan 2021-Present</p>
                <p className="text-gray-300">Assess local administrations to promote social housing, wrapped as co-ops, as a solution to provide stable and affordable housing in rural areas. Support civil groups to promote cooperative housing with participatory design focused on regen and user-centric solutions.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Visiting Professor</h3>
                <p className="text-gray-300">University of Girona (Spain) | 2018-2021</p>
                <p className="text-gray-300">Co-operative Housing and Participatory Design Workshop with Estel Jou. Architecture Photography Seminar with PhD M.P. Fontana 2018 & 2019.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Architect</h3>
                <p className="text-gray-300">Auquer Prats Arquitectures, Girona (Spain) | July 2017-December 2021</p>
                <p className="text-gray-300">Development of initial and executive projects for new construction, rehabilitation, renovation, and expansion of farmhouses and traditional houses following regenerative, passivhouse and bioclimatic principles.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Architecture Photographer</h3>
                <p className="text-gray-300">Independent, Girona (Spain) | July 2017-May 2023</p>
                <p className="text-gray-300">Development of architecture and urban photography projects for studios.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium">UNIVERSITY OF GIRONA (Spain)</h3>
                <p className="text-gray-300">6y Architecture (Msc) | 2008-2016</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">UNIVERSITY OF LA SAPIENZA (Italy)</h3>
                <p className="text-gray-300">Exchange Year Architecture | 2013-2014</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Blockchain Cohorts</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Kernel X | Starting Feb 2025</li>
              <li>SOAM Research Residency | 2024</li>
              <li>Edge City Lanna | 2024</li>
              <li>SheFi 12 (Granted) | 2024</li>
              <li>Blockchain for Social Impact | 2020</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Blockchain International Speaker</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Funding the Commons (Bangkok) | November 2024</li>
              <li>Ethereum Prague (Czech Republic) | May 2024</li>
              <li>Crypto Commons Gathering (Austria) | August 2024</li>
              <li>Regen Village (Belgium) | 2024</li>
              <li>Metafest (Croatia) | August 2023</li>
              <li>Ethereum Barcelona (Spain) | 2023</li>
              <li>Ethereum Barcelona (Spain) | 2022</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Publications</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>No bosses what's like working in a DAO? | Time Magazine, 2022</li>
              <li>How community ownership could solve affordability crisis | Reimagining Future, 2025</li>
              <li>It takes a village or a DAO? | Housing Affordability, 2024</li>
              <li>Divisare Publications | 2021</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Email: cgromaches@protonmail.com</li>
              <li>Website: <a href="http://www.claragromaches.com" className="text-blue-400 hover:text-blue-300">www.claragromaches.com</a></li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
} 