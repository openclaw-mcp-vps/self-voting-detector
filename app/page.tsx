export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Platform Security
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Detect Fake Engagement &amp;<br />Self-Voting Patterns
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Analyze voting patterns via REST API to expose self-voting, coordinated bot networks,
          and fake engagement — with confidence scores and detailed reports.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get API Access — $49/mo
        </a>
        <div className="mt-10 bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-left">
          <p className="text-xs text-[#8b949e] mb-2 font-mono">POST /api/analyze</p>
          <pre className="text-sm text-[#c9d1d9] font-mono overflow-x-auto">{
`{
  "votes": [
    { "voter_id": "u1", "target_id": "u2", "timestamp": 1710000000 },
    { "voter_id": "u1", "target_id": "u1", "timestamp": 1710000060 }
  ]
}`
          }</pre>
          <p className="text-xs text-[#8b949e] mt-3 mb-1 font-mono">Response</p>
          <pre className="text-sm text-[#58a6ff] font-mono overflow-x-auto">{
`{
  "self_voting_score": 0.94,
  "bot_network_score": 0.31,
  "flagged_users": ["u1"],
  "verdict": "HIGH_RISK"
}`
          }</pre>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] bg-[#161b22] rounded-xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$49</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited API calls",
              "Self-voting detection",
              "Bot network analysis",
              "Confidence scores & reports",
              "JSON REST API",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">What platforms does this support?</h3>
            <p className="text-[#8b949e] text-sm">Any platform that can send voting data as JSON — forums, social networks, review sites, DAOs, and more.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">How accurate is the detection?</h3>
            <p className="text-[#8b949e] text-sm">Our algorithms return confidence scores (0–1) so you decide the threshold. Typical self-voting detection accuracy exceeds 92% on real-world datasets.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Is my data stored?</h3>
            <p className="text-[#8b949e] text-sm">No. Voting data is processed in-memory per request and never persisted. Your data stays private.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Self-Voting Detector. All rights reserved.
      </footer>
    </main>
  )
}
