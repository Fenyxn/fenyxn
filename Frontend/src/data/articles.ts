export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; lang: string; code: string }
  | { type: "note"; text: string };

export type ServiceKey = "indian" | "crypto" | "forex";

/** market pages a guide sends readers to */
export const serviceLinks: Record<ServiceKey, { href: string; title: string; desc: string }> = {
  indian: {
    href: "/indian-algo/",
    title: "Indian algo trading",
    desc: "Automated intraday, options, and swing strategies on NSE — built on your broker's API.",
  },
  crypto: {
    href: "/crypto-algo/",
    title: "Crypto algo trading",
    desc: "Round-the-clock automated strategies on Delta Exchange over live WebSocket feeds.",
  },
  forex: {
    href: "/forex-algo/",
    title: "Forex algo trading",
    desc: "Rule-driven currency strategies automated end-to-end on MetaTrader 5.",
  },
};

export type Article = {
  slug: string;
  /** h1 on the article page */
  title: string;
  /** <title> tag — may differ from the h1 to fit search results */
  metaTitle: string;
  description: string;
  keywords: string[];
  /** short category pill shown on the hub card */
  tag: string;
  /** one-line summary used on the hub */
  summary: string;
  published: string;
  updated: string;
  readingMinutes: number;
  /** market pages this guide is relevant to */
  services: ServiceKey[];
  blocks: Block[];
};

export const articles: Article[] = [
  {
    slug: "what-is-algorithmic-trading",
    title: "What is algorithmic trading?",
    metaTitle: "What Is Algorithmic Trading? A Practical Guide for Indian Traders",
    description:
      "A plain-English explanation of algorithmic trading — what a trading algorithm actually is, how orders reach the exchange, and what separates a strategy that works on paper from one that survives live markets.",
    keywords: [
      "what is algorithmic trading",
      "algo trading meaning",
      "algorithmic trading India",
      "how does algo trading work",
      "automated trading explained",
    ],
    tag: "Fundamentals",
    summary:
      "What a trading algorithm actually is, how an order travels from signal to exchange, and why most strategies break the moment they meet a live market.",
    published: "2026-03-12",
    updated: "2026-07-27",
    readingMinutes: 8,
    services: ["indian", "crypto", "forex"],
    blocks: [
      {
        type: "p",
        text: "Algorithmic trading is the practice of letting software decide when to buy and sell, according to rules you defined in advance. That is the whole idea. There is no intelligence implied by the word 'algorithm' here — it simply means a fixed set of instructions that runs the same way every time, without the hesitation, boredom, or fear that affects a human watching the same screen for six hours.",
      },
      {
        type: "p",
        text: "The confusion usually starts because the term covers wildly different things. A hedge fund co-locating servers next to the NSE matching engine to shave microseconds off execution is doing algorithmic trading. So is a retail trader running a Python script that checks a moving average once every five minutes and places one order a day. The mechanics are the same; only the scale and the cost differ.",
      },
      { type: "h2", text: "What a trading algorithm actually contains" },
      {
        type: "p",
        text: "Strip away the marketing and almost every trading system is four components wired together. If any one of them is weak, the other three do not matter.",
      },
      {
        type: "ul",
        items: [
          "A data feed — prices arriving from the exchange or your broker, either as periodic snapshots or a live tick stream.",
          "A signal rule — the condition that defines an opportunity, for example 'price closed above the 20-period average and volume is above its own average'.",
          "Risk and sizing rules — how much to buy, where the stop sits, how much total exposure is allowed at once. This is the part beginners skip and professionals obsess over.",
          "An execution layer — the code that turns a decision into an actual order at the broker, then confirms it filled, handles rejections, and knows what to do when the network drops mid-order.",
        ],
      },
      {
        type: "p",
        text: "Beginners spend nearly all their effort on the signal rule, because it is the interesting part. In production, the signal is usually the smallest and most stable piece of code in the system. The execution layer — the boring one — is where the bugs live and where money is quietly lost.",
      },
      { type: "h2", text: "How an order actually reaches the exchange" },
      {
        type: "p",
        text: "For a retail trader in India, the path is more layered than it first appears. Your script does not talk to the NSE. It talks to your broker, and the broker talks to the exchange:",
      },
      {
        type: "ul",
        items: [
          "Your code receives a price update over the broker's WebSocket feed, or requests a candle over REST.",
          "Your logic evaluates and decides to enter a position.",
          "Your code calls the broker's order-placement API over HTTPS, authenticated with an access token.",
          "The broker performs its own risk checks — margin, position limits, whether the instrument is allowed — and forwards the order to the exchange.",
          "The exchange matches it, and the fill travels back along the same chain as a confirmation, usually on a separate order-update stream.",
        ],
      },
      {
        type: "p",
        text: "Every hop in that chain can fail independently, and this is the single most underestimated fact in retail algo trading. The order can be accepted by the broker and rejected by the exchange. The confirmation can be delayed past the point where your logic has already moved on. Your token can expire mid-session. A system that assumes the happy path will eventually place a duplicate order, or think it is flat when it is holding a position.",
      },
      { type: "h2", text: "Why 'it worked in backtest' means less than it sounds" },
      {
        type: "p",
        text: "A backtest replays historical prices through your rules and reports what would have happened. It is a necessary tool and a deeply misleading one, because the historical market does not react to you and never refuses your order. Live markets do both.",
      },
      {
        type: "p",
        text: "The gap between a backtest and reality usually comes from a handful of specific, fixable omissions — slippage, costs, and the assumption of a fill at the printed price. Those are covered in detail in the backtesting article, and they routinely turn an apparently profitable strategy into a losing one.",
      },
      { type: "h2", text: "What automation genuinely gives you" },
      {
        type: "p",
        text: "Automation does not find profitable strategies. If your rules have no edge, running them faster only loses money more efficiently. What automation reliably provides is narrower and more valuable than most people expect:",
      },
      {
        type: "ul",
        items: [
          "Consistency — the system takes the twelfth trade of a losing week exactly as it took the first. Most discretionary traders cannot.",
          "Speed — a rule that requires acting within seconds of a signal is simply not executable by hand across multiple instruments.",
          "Coverage — one process can watch two hundred symbols at once; you can watch perhaps four.",
          "Measurability — every decision is logged, so when performance degrades you can find out precisely which rule stopped working, rather than guessing.",
        ],
      },
      {
        type: "p",
        text: "That last point is the one experienced traders come to value most. A discretionary trader who has a bad quarter has a story about what went wrong. An automated trader has a database.",
      },
      { type: "h2", text: "What it does not protect you from" },
      {
        type: "p",
        text: "Automation removes emotion from execution, not from ownership. The hardest moment in running a live system is not building it — it is the drawdown three weeks in, when the equity curve is down and you must decide whether the strategy is broken or simply experiencing the losing streak the backtest already told you to expect. Turning a working system off at the bottom of a normal drawdown is the most common way automated traders lose money.",
      },
      {
        type: "note",
        text: "This article is educational and is not investment advice or a recommendation to trade. Algorithmic trading carries the risk of substantial financial loss, including losses that can exceed your initial capital in leveraged products.",
      },
    ],
  },

  {
    slug: "is-algo-trading-legal-in-india",
    title: "Is algo trading legal in India?",
    metaTitle: "Is Algo Trading Legal in India? SEBI's Retail Framework Explained",
    description:
      "Algorithmic trading is legal for retail traders in India and operates under a SEBI framework covering broker APIs, algo registration, order-rate thresholds, and vendor empanelment. Here is how the rules fit together.",
    keywords: [
      "is algo trading legal in India",
      "SEBI algo trading rules",
      "SEBI retail algo trading framework",
      "algo trading regulations India",
      "broker API rules SEBI",
    ],
    tag: "Regulation",
    summary:
      "Yes — and it operates inside a defined SEBI framework. What the rules cover, which thresholds matter, and where retail traders most often get caught out.",
    published: "2026-04-02",
    updated: "2026-07-27",
    readingMinutes: 9,
    services: ["indian"],
    blocks: [
      {
        type: "p",
        text: "Algorithmic trading is legal for retail participants in India. The question people are usually asking, though, is narrower than the one they say out loud: they want to know whether running their own script against a broker API will get their account flagged. The answer is that it is permitted, and it operates inside a framework SEBI defined specifically because retail API trading had grown well ahead of the rules governing it.",
      },
      {
        type: "note",
        text: "Regulation in this area has changed repeatedly and continues to evolve, and the details below are a general overview rather than legal or compliance advice. Confirm the current position against SEBI's own circulars and your broker's and exchange's latest notifications before you rely on any of it.",
      },
      { type: "h2", text: "How the framework came about" },
      {
        type: "p",
        text: "Institutional algo trading has been regulated in India since 2012, when SEBI issued its first broad guidelines covering exchange approval, risk controls, and audit requirements. Retail was a different story. As brokers opened HTTP and WebSocket APIs through the late 2010s, a large volume of retail automation grew up in a space that had no framework written for it — traders ran their own scripts, and a substantial third-party industry sold ready-made 'algos' with performance claims nobody was obliged to substantiate.",
      },
      {
        type: "p",
        text: "SEBI moved to close that gap with a dedicated framework for retail algorithmic trading, issued in early 2025 and phased in over the following months. Its central idea is straightforward: every algorithmic order should be traceable to a registered algorithm, and the broker whose API carried it is accountable for it.",
      },
      { type: "h2", text: "What the framework covers" },
      {
        type: "p",
        text: "The provisions that matter most to an individual running their own code are these:",
      },
      {
        type: "ul",
        items: [
          "Algo orders must be tagged. Orders originating from an algorithm carry a unique identifier so the exchange can attribute them to a specific registered algo rather than to generic manual activity.",
          "An order-rate threshold separates casual API use from algo trading proper. Beyond a defined rate of orders per second from a single client, activity is treated as algorithmic and attracts registration requirements. Occasional API orders below that threshold are not treated the same way.",
          "Brokers are accountable for API access. They are expected to control how API access is granted, including measures such as static IP whitelisting, and to supervise what flows through their infrastructure.",
          "Third-party algo providers must be empanelled. Vendors selling algos to retail clients work through brokers under exchange oversight, rather than distributing strategies directly to the public.",
          "Exchanges provide testing facilities so algos can be validated in a simulated environment before they touch live capital.",
        ],
      },
      {
        type: "p",
        text: "Self-developed algorithms — code you wrote for your own account — are permitted. Above the threshold, they come with registration obligations handled via your broker. The practical effect is that a trader placing a handful of automated orders a day is in a very different position from one firing hundreds per minute, which is roughly the distinction the framework was designed to draw.",
      },
      { type: "h2", text: "Where retail traders actually get caught out" },
      {
        type: "p",
        text: "In practice, the problems we see are rarely about the legality of automation itself. They are operational:",
      },
      {
        type: "ul",
        items: [
          "Unintentional order flooding. A retry loop with no backoff can emit hundreds of orders in seconds after a single API timeout, pushing an otherwise modest strategy across a threshold and triggering broker-side intervention.",
          "Sharing credentials. API keys tied to one account being used to trade another person's funds moves the activity into territory that attracts a different and much heavier set of obligations.",
          "Treating a vendor's claims as verified. Empanelment governs the distribution channel; it is not a regulator's endorsement that a strategy is profitable.",
          "Assuming rules are static. Thresholds, deadlines, and broker-level implementation details have shifted more than once. Code written against last year's understanding may not match this year's requirements.",
        ],
      },
      { type: "h2", text: "A reasonable compliance posture" },
      {
        type: "p",
        text: "For an individual automating their own trading, a sensible baseline looks like this. Trade only your own capital through your own credentials. Rate-limit your own order flow deliberately rather than discovering a limit by breaching it. Put hard caps in code on orders per minute and on total daily exposure. Keep a durable log of every order your system sends, with timestamps and the broker's response — if a question is ever raised, that record is what answers it. And read what your broker publishes about API terms, because the operational rules you will actually be held to are largely enforced at that layer.",
      },
      {
        type: "p",
        text: "None of this is burdensome, and most of it is what you would want for your own debugging regardless. The systems that run into trouble are almost never the carefully rate-limited ones.",
      },
      {
        type: "note",
        text: "This article is educational and is not legal, compliance, or investment advice. Regulatory requirements change and vary by broker and exchange. Consult a qualified professional and the current SEBI circulars before acting.",
      },
    ],
  },

  {
    slug: "backtesting-a-trading-strategy",
    title: "Backtesting: what it proves, and what it hides",
    metaTitle: "Backtesting a Trading Strategy: What It Proves and What It Hides",
    description:
      "Most backtests are optimistic for reasons that are entirely fixable — lookahead bias, survivorship bias, ignored costs, and assumed fills. A practical guide to making a backtest tell the truth.",
    keywords: [
      "backtesting trading strategy",
      "backtest bias",
      "lookahead bias",
      "survivorship bias backtest",
      "walk forward testing",
      "backtesting Python",
    ],
    tag: "Method",
    summary:
      "Why a profitable backtest so often becomes a losing live system — and the specific, fixable errors that cause the gap.",
    published: "2026-05-08",
    updated: "2026-07-27",
    readingMinutes: 10,
    services: ["indian", "crypto", "forex"],
    blocks: [
      {
        type: "p",
        text: "A backtest answers one question: if these exact rules had run over this exact period, what would have happened? That is genuinely useful. The trouble is that people hear it answering a much broader question — will this make money — and it cannot answer that at all.",
      },
      {
        type: "p",
        text: "Nearly every backtest is too optimistic, and usually for reasons that are specific, well understood, and correctable. Here are the ones that do the most damage, roughly in order of how much they inflate results.",
      },
      { type: "h2", text: "Lookahead bias" },
      {
        type: "p",
        text: "Lookahead bias means using information that would not have been available at the moment of the decision. It is the most destructive error because it can be invisible in code that looks perfectly reasonable.",
      },
      {
        type: "code",
        lang: "python",
        code: `# Wrong — decides using the close of the candle it trades on
df["signal"] = df["close"] > df["sma_20"]
df["ret"] = df["signal"] * df["close"].pct_change()

# Right — the decision uses only completed information
df["signal"] = (df["close"] > df["sma_20"]).shift(1)
df["ret"] = df["signal"] * df["close"].pct_change()`,
      },
      {
        type: "p",
        text: "The first version buys at a candle's close using knowledge of that same close. In live trading you cannot know a candle's closing price until it has closed, at which point you can only act on the next one. That single missing shift can turn a mediocre strategy into a spectacular one on paper. If a backtest produces an unusually smooth equity curve, this is the first thing to check.",
      },
      { type: "h2", text: "Survivorship bias" },
      {
        type: "p",
        text: "If you test a strategy on the current NIFTY 50 constituents over the last ten years, you are testing it on companies that were successful enough to still be in the index today. The ones that were removed after collapsing are absent from the data, and your strategy never had to hold them on the way down. Index membership changes over time, and a test that ignores that is measuring the index committee's hindsight as much as your rules.",
      },
      { type: "h2", text: "Costs and slippage" },
      {
        type: "p",
        text: "This is the one that most reliably kills intraday strategies. Every trade in India carries brokerage, STT, exchange transaction charges, GST, SEBI turnover fees, and stamp duty. On top of those explicit costs sits slippage — the difference between the price your signal saw and the price you actually got.",
      },
      {
        type: "p",
        text: "A strategy averaging 0.15% per trade before costs, trading ten times a day, is not a good strategy. It is a mechanism for transferring money to intermediaries. The arithmetic is unforgiving and it is the single fastest sanity check available: take your average gross edge per trade, subtract a realistic round-trip cost, and multiply by your trade frequency. If that number is not comfortably positive, no amount of further optimisation will save it.",
      },
      {
        type: "ul",
        items: [
          "Model costs per trade explicitly, not as an annual percentage.",
          "Assume you get filled at the next candle's open, not the signal candle's close.",
          "For anything illiquid or large relative to typical volume, add slippage well beyond the spread.",
          "Test whether the strategy survives costs twice as high as your estimate. If it does not, the margin is too thin to be real.",
        ],
      },
      { type: "h2", text: "Overfitting" },
      {
        type: "p",
        text: "Given enough parameters and enough attempts, any dataset can be fitted perfectly. A strategy with six tunable numbers, optimised over three years of data, will find a combination that looks superb — and that combination describes the noise in those particular three years rather than any durable market behaviour.",
      },
      {
        type: "p",
        text: "The defences are unglamorous and effective: prefer fewer parameters; be suspicious of results that depend on precise values; and check the neighbourhood. If a 20-period lookback is profitable but 18 and 22 both lose money, you have not found an edge, you have found a coincidence. A genuine edge tends to degrade gracefully as parameters shift rather than falling off a cliff.",
      },
      { type: "h2", text: "Walk-forward testing" },
      {
        type: "p",
        text: "The most useful structural improvement is to stop optimising and testing on the same data. In walk-forward testing you fit parameters on one window, test on the next unseen window, then roll both forward and repeat. What you end up with is a record of how the strategy performed on data it had never been tuned against — which is the only situation it will ever face live.",
      },
      {
        type: "p",
        text: "Results from walk-forward testing are almost always worse than from a single optimised backtest. That is the point. The number is lower because it is closer to true.",
      },
      { type: "h2", text: "What a trustworthy backtest looks like" },
      {
        type: "p",
        text: "By the time a strategy is worth risking capital on, the test behind it should include realistic costs and slippage, use only information available at decision time, run across regimes that include at least one serious drawdown, report the worst peak-to-trough decline alongside the return, and show results on data never used for tuning. It should also be boring. A backtest that looks too good is not usually a discovery — it is usually a bug, and finding it is cheaper before the capital goes in than after.",
      },
      {
        type: "note",
        text: "This article is educational and is not investment advice. Past performance, whether simulated or actual, does not indicate future results.",
      },
    ],
  },

  {
    slug: "indian-broker-apis-compared",
    title: "Working with Indian broker APIs",
    metaTitle: "Indian Broker APIs Compared: Zerodha, Angel One, Dhan, Upstox",
    description:
      "A practical look at automating against Indian broker APIs — authentication and daily login flows, WebSocket market data, rate limits, order handling, and the failure modes that matter in production.",
    keywords: [
      "Zerodha Kite Connect API",
      "Angel One SmartAPI",
      "Dhan API trading",
      "Upstox API",
      "Indian broker API automation",
      "broker WebSocket feed India",
    ],
    tag: "Integration",
    summary:
      "Authentication, market-data feeds, rate limits, and order handling across the major Indian broker APIs — and the failure modes that only appear in production.",
    published: "2026-06-14",
    updated: "2026-07-27",
    readingMinutes: 11,
    services: ["indian"],
    blocks: [
      {
        type: "p",
        text: "Most Indian broker APIs expose broadly the same surface: authenticate to get a token, subscribe to a WebSocket for live prices, place and manage orders over REST, and reconcile positions. The differences that matter are rarely in the documented endpoints. They show up in the daily login flow, the rate limits, and what happens when something goes wrong mid-session.",
      },
      { type: "h2", text: "Authentication is the first thing that will break" },
      {
        type: "p",
        text: "Indian broker APIs generally issue access tokens valid for a single trading day, and the token-generation step typically involves an interactive login with two-factor authentication. This is a deliberate regulatory posture, not an oversight, and it has a direct consequence: a genuinely unattended, fully hands-off system is harder to build here than the API documentation implies.",
      },
      {
        type: "p",
        text: "In practice you design around it. Treat token acquisition as a distinct pre-market step that runs before the session and writes the token somewhere your trading process reads at startup. Store it outside your code — an environment variable, a secrets store, or a short-lived cache entry. Assume the token can be invalidated mid-session and handle the resulting authentication failure as an expected event rather than a crash.",
      },
      {
        type: "code",
        lang: "python",
        code: `# Treat auth failure as an expected state, not an exception path
async def place_order(client, payload, *, retries=2):
    for attempt in range(retries + 1):
        resp = await client.post("/orders", json=payload)
        if resp.status_code == 401 and attempt < retries:
            await client.refresh_token()
            continue
        if resp.status_code == 429:
            await asyncio.sleep(2 ** attempt)  # back off, do not hammer
            continue
        return resp
    raise OrderFailed(payload)`,
      },
      {
        type: "p",
        text: "Note the backoff on a rate-limit response. A naive retry loop that immediately re-fires on failure is the most common way a modest strategy accidentally emits hundreds of orders in a few seconds.",
      },
      { type: "h2", text: "Market data: WebSocket, not polling" },
      {
        type: "p",
        text: "Every major Indian broker offers a binary WebSocket feed for live quotes, and you should use it. Polling a REST quote endpoint is slower, burns your rate limit, and gives you a worse picture of the market. The feeds typically offer tiered modes — a lightweight last-traded-price mode, and heavier modes carrying full market depth. Subscribe to the lightest mode that satisfies your strategy; depth data is significantly more bandwidth and most strategies never read it.",
      },
      {
        type: "p",
        text: "The operational details that actually cause incidents:",
      },
      {
        type: "ul",
        items: [
          "Subscription limits. There is a ceiling on instruments per connection. Strategies that scan a wide universe need either multiple connections or a filtered watchlist.",
          "Reconnection. Feeds drop. Your client must reconnect with backoff and re-subscribe on reconnect — a reconnect that forgets its subscriptions produces a silent feed, which is far more dangerous than a visible crash.",
          "Instrument tokens change. Contracts are identified by numeric tokens, and these are refreshed periodically. A hardcoded token will eventually point at the wrong instrument or nothing at all. Download the instrument master daily and resolve symbols at startup.",
          "Ticks are not candles. The feed gives you a stream of trades, not neat OHLC bars. If your strategy works on candles, you are responsible for aggregating them correctly and for deciding what a candle means when no trade occurred in the interval.",
        ],
      },
      { type: "h2", text: "Orders and the reconciliation problem" },
      {
        type: "p",
        text: "Placing an order is easy. Knowing what happened to it is the hard part. An order can be accepted by the broker and rejected by the exchange moments later. A confirmation can arrive after your logic has already moved on. A network failure can leave you genuinely uncertain whether an order was placed at all.",
      },
      {
        type: "p",
        text: "The rule that avoids most of this pain: never treat your own intent as the truth about your position. The broker's reported position book is the truth. Your system should reconcile against it — at startup, periodically through the session, and always after any error. A strategy that believes it is flat while holding an open position is how a small bug becomes a large loss.",
      },
      {
        type: "p",
        text: "It is also worth being deliberate about idempotency. If a request times out, you do not know whether it arrived. Re-sending blindly risks a duplicate position; assuming failure risks an unmanaged one. Tagging orders with your own identifier and querying before retrying resolves the ambiguity.",
      },
      { type: "h2", text: "Choosing between brokers" },
      {
        type: "p",
        text: "For automation specifically, the differentiators worth weighing are the cost of API access, whether historical candle data is included or charged separately, the documented rate limits, WebSocket stability under load, and how the daily authentication flow works. Most comparisons focus on brokerage rates, which matter far less to an automated system than a feed that stays connected and an order API that behaves predictably under stress.",
      },
      {
        type: "p",
        text: "Specific pricing, limits, and endpoints change often enough that any figures quoted here would be stale before long — check each broker's current API documentation directly. The architectural advice does not change: build for token expiry, rate limits, reconnection, and reconciliation, and the specific broker becomes a detail you can swap.",
      },
      {
        type: "note",
        text: "This article is educational and is not investment advice or a recommendation of any broker. Verify current API terms, limits, and pricing with the provider before building against them.",
      },
    ],
  },

  {
    slug: "supertrend-intraday-strategy",
    title: "How a Supertrend intraday strategy works",
    metaTitle: "Supertrend Intraday Strategy: How It Works and Where It Fails",
    description:
      "A walkthrough of the Supertrend indicator — how the ATR-based bands are calculated, why the flip rule matters, how the strategy behaves in trends versus ranges, and the filters that make it usable.",
    keywords: [
      "Supertrend strategy",
      "Supertrend indicator explained",
      "intraday momentum strategy",
      "ATR trailing stop",
      "Supertrend Python",
      "intraday algo strategy India",
    ],
    tag: "Strategy",
    summary:
      "The maths behind the ATR bands, why the flip rule matters more than the indicator, and the market conditions where it reliably bleeds.",
    published: "2026-07-04",
    updated: "2026-07-27",
    readingMinutes: 10,
    services: ["indian", "crypto", "forex"],
    blocks: [
      {
        type: "p",
        text: "Supertrend is one of the most widely used intraday indicators in India, largely because it produces an unambiguous signal — it is either long or short, with a visible line to trail a stop against. It is a reasonable teaching example precisely because its strengths and its failure mode are both easy to see.",
      },
      { type: "h2", text: "The calculation" },
      {
        type: "p",
        text: "Supertrend is built on Average True Range, a measure of volatility. True Range for a bar is the largest of: the high-low range, the distance from the previous close to the high, and the distance from the previous close to the low. Including the previous close is what makes it account for gaps. ATR is then a moving average of that value, typically over 10 or 14 periods.",
      },
      {
        type: "p",
        text: "From ATR you construct two bands around the midpoint of each bar:",
      },
      {
        type: "code",
        lang: "python",
        code: `hl2 = (high + low) / 2
upper_basic = hl2 + multiplier * atr
lower_basic = hl2 - multiplier * atr`,
      },
      {
        type: "p",
        text: "A multiplier of 3 with a 10-period ATR is the common default. Then comes the part that people skip when implementing it themselves, and it is the part that makes the indicator work: the bands ratchet. The upper band may only move down while price is below it, and the lower band may only move up while price is above it. Without that rule the bands simply oscillate with volatility and the indicator produces noise.",
      },
      {
        type: "code",
        lang: "python",
        code: `# The ratchet: bands tighten toward price but never loosen away from it
if upper_basic < prev_upper or prev_close > prev_upper:
    upper = upper_basic
else:
    upper = prev_upper

if lower_basic > prev_lower or prev_close < prev_lower:
    lower = lower_basic
else:
    lower = prev_lower`,
      },
      {
        type: "p",
        text: "The trend flips when price closes across the active band. Below the upper band the indicator is bearish and the upper band is the trailing stop; above the lower band it is bullish and the lower band is the stop. The visible Supertrend line is just whichever band is currently active.",
      },
      { type: "h2", text: "Why it works when it works" },
      {
        type: "p",
        text: "Because the bands are ATR-scaled, the stop distance adapts to conditions automatically. In a quiet market it sits close to price; when volatility expands it widens, which avoids being shaken out by the larger swings that accompany a genuine trend. That single property is most of the indicator's value — it is a volatility-adjusted trailing stop with an unambiguous entry rule attached.",
      },
      { type: "h2", text: "Why it bleeds in a range" },
      {
        type: "p",
        text: "The failure mode is not subtle and is entirely predictable. In a sideways market price crosses the bands repeatedly, and each crossing generates a flip. Every flip is a trade. Every trade pays costs and gives up part of the spread. A ranging session can produce a long sequence of small losing trades, each individually reasonable, that together carve a meaningful hole in the account.",
      },
      {
        type: "p",
        text: "This is worth stating plainly because it explains why Supertrend backtests look so different depending on the period chosen. Tested across a trending stretch it looks excellent. Tested across a choppy one it looks broken. It is the same indicator; the market changed. Any honest evaluation has to span both.",
      },
      { type: "h2", text: "The filters that make it usable" },
      {
        type: "p",
        text: "Practically nobody trades raw Supertrend flips. The standard approach is to add conditions that suppress trading in the environment where it is known to fail:",
      },
      {
        type: "ul",
        items: [
          "A trend filter — for example, only take long flips while price is above a longer-period moving average. This alone removes a large share of range-bound whipsaws.",
          "A volatility floor — require ATR to be above some threshold, on the reasoning that very low volatility often precedes directionless drift.",
          "Time-of-day rules — the first and last few minutes of an Indian session behave differently from the middle, and many intraday systems simply exclude them.",
          "A daily trade cap — a hard ceiling on flips per day bounds the damage on the worst kind of session.",
        ],
      },
      {
        type: "p",
        text: "Each filter reduces the number of trades, and each also reduces the number of good ones. That trade-off is the actual design work, and it is where a backtest with realistic costs earns its keep. It is also worth remembering that adding filters means adding parameters, which makes overfitting easier — a system with four filters tuned on one year of data deserves considerably more scepticism than one with none.",
      },
      { type: "h2", text: "The wider point" },
      {
        type: "p",
        text: "Supertrend is a reasonable trailing-stop mechanism wrapped around a simple entry rule. It is not an edge on its own, and no indicator is. What determines whether a system built on it makes money is the surrounding structure — position sizing, the filter set, cost assumptions, and the discipline to keep running it through the drawdowns the design implies. The indicator is the easy part, and it is the part everyone spends their time on.",
      },
      {
        type: "note",
        text: "This article is educational and is not investment advice or a recommendation of any strategy. Intraday trading carries a high risk of loss.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
