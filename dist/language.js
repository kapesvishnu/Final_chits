(() => {
  const words = {
    'Extra payment (₹)':'అదనపు చెల్లింపు (₹)',
    'Reset monthly overrides':'నెలవారీ ప్రత్యేక చెల్లింపులను రీసెట్ చేయండి',
    'Extra payment must be a nonnegative number.':'అదనపు చెల్లింపు సున్నా లేదా అంతకంటే ఎక్కువ సంఖ్య కావాలి.',
    'Set a recurring extra above, or edit an individual month below and leave the field to recalculate. Enter 0 to skip the extra for that month; clear it to use the recurring amount.':'పైన ప్రతి నెల అదనపు చెల్లింపును నమోదు చేయండి. లేదా కింద ఒక నెల మొత్తాన్ని మార్చి గడి నుంచి బయటకు వస్తే లెక్కలు మారుతాయి. ఆ నెల అదనపు చెల్లింపు వద్దంటే 0 నమోదు చేయండి; ప్రతి నెల మొత్తాన్ని వాడటానికి గడిని ఖాళీ చేయండి.',
    'Money':'ఆర్థిక', 'Calculators':'లెక్కలు', 'PLAN WITH CLARITY':'స్పష్టమైన ఆర్థిక ప్రణాళిక',
    'YOUR NUMBERS, SIMPLIFIED':'మీ లెక్కలు సులభంగా',
    'Loan EMI & Advanced Chit Fund Calculator':'రుణ EMI మరియు అధునాతన చిట్ ఫండ్ కాలిక్యులేటర్',
    'Calculate home, car, personal and education loan EMIs, or plan chit fund bids, monthly payments and payout amounts.':'గృహ, వాహన, వ్యక్తిగత, విద్యా రుణాల EMIలను లెక్కించండి. చిట్ వేలం, నెలవారీ చెల్లింపులు, అందుకునే మొత్తాన్ని ప్రణాళిక చేసుకోండి.',
    'EMI & repayments':'EMI మరియు చెల్లింపులు', 'Compare loans':'రుణాల పోలిక',
    'Flat / interest only':'ఫ్లాట్ వడ్డీ / వడ్డీ మాత్రమే', 'Chit fund':'చిట్ ఫండ్', 'Chit Planner':'చిట్ ప్రణాళిక',
    'Home, car, personal or education loans.':'గృహ, వాహన, వ్యక్తిగత లేదా విద్యా రుణాలు.',
    'Compare the same amount with different rates, terms and upfront fees.':'ఒకే రుణ మొత్తానికి వడ్డీ రేట్లు, కాలపరిమితులు, ముందస్తు రుసుములను పోల్చండి.',
    'Interest calculated on the original principal throughout the term.':'మొత్తం కాలపరిమితిలో అసలు రుణ మొత్తంపైనే వడ్డీ లెక్కిస్తారు.',
    'Enter the discount in rupees and commission as a percentage of the chit face value. Commission is included in the discount.':'వేలం తగ్గింపును రూపాయల్లో, నిర్వాహకుని కమీషన్‌ను చిట్ విలువలో శాతంగా నమోదు చేయండి. తగ్గింపులో కమీషన్ కలిపి ఉంటుంది.',
    'Compare the payout you receive, everything you pay over your chosen term, and the cost spread over your total months.':'మీరు అందుకునే మొత్తం, కాలపరిమితిలో చెల్లించే మొత్తం, నెలకు సగటు తేడాను పోల్చండి.',
    'Loan amount (₹)':'రుణ మొత్తం (₹)', 'Annual interest (%)':'వార్షిక వడ్డీ (%)', 'Term (months)':'కాలపరిమితి (నెలలు)',
    'Extra monthly payment (₹)':'నెలకు అదనపు చెల్లింపు (₹)', 'Loan A rate (%)':'రుణం A వడ్డీ (%)', 'Loan B rate (%)':'రుణం B వడ్డీ (%)',
    'Loan A months':'రుణం A నెలలు', 'Loan B months':'రుణం B నెలలు', 'Loan A fee (₹)':'రుణం A రుసుము (₹)', 'Loan B fee (₹)':'రుణం B రుసుము (₹)',
    'Principal (₹)':'అసలు మొత్తం (₹)', 'Annual rate (%)':'వార్షిక రేటు (%)', 'Chit face value (₹)':'చిట్ మొత్తం విలువ (₹)',
    'Members / installments':'సభ్యులు / వాయిదాలు', 'Auction discount (₹)':'వేలం తగ్గింపు (₹)', 'Organizer commission (%)':'నిర్వాహకుని కమీషన్ (%)',
    'Total members':'మొత్తం సభ్యులు', 'Total months':'మొత్తం నెలలు', 'Payout month':'డబ్బు తీసుకునే నెల',
    'Calculate':'లెక్కించండి', 'YOUR MONTHLY EMI':'మీ నెలవారీ EMI', 'Total interest':'మొత్తం వడ్డీ', 'Total repayment':'మొత్తం తిరిగి చెల్లింపు',
    'Paid off in':'రుణం పూర్తయ్యే కాలం', 'Interest saved':'ఆదా అయ్యే వడ్డీ', 'DIFFERENCE IN TOTAL COST':'మొత్తం ఖర్చులో తేడా',
    'Loan A EMI':'రుణం A EMI', 'Loan B EMI':'రుణం B EMI', 'Loan A total + fee':'రుణం A మొత్తం + రుసుము', 'Loan B total + fee':'రుణం B మొత్తం + రుసుము',
    'Both loans have the same total cash outflow.':'రెండు రుణాల మొత్తం చెల్లింపు సమానం.',
    'FLAT-LOAN MONTHLY PAYMENT':'ఫ్లాట్ వడ్డీ రుణ నెలవారీ చెల్లింపు', 'Interest-only monthly':'నెలవారీ వడ్డీ చెల్లింపు',
    'Interest-only final payment':'అసలు మొత్తంతో సహా చివరి చెల్లింపు', 'For interest-only loans, repay the principal with the final interest payment.':'వడ్డీ మాత్రమే చెల్లించే రుణంలో చివరి వడ్డీ చెల్లింపుతో పాటు అసలు మొత్తాన్ని చెల్లించాలి.',
    'WINNER PAYOUT':'వేలం గెలిచిన సభ్యునికి అందే మొత్తం', 'Gross installment':'స్థూల వాయిదా', 'Dividend per member':'ఒక్కో సభ్యునికి వాటా',
    'Net installment':'నికర వాయిదా', 'Organizer commission':'నిర్వాహకుని కమీషన్',
    'Fixed monthly payments. Final payment is adjusted to clear the balance.':'నెలవారీ చెల్లింపు స్థిరంగా ఉంటుంది. మిగిలిన బకాయి పూర్తయ్యేలా చివరి చెల్లింపు సర్దుబాటు అవుతుంది.',
    'THE FULL PICTURE':'పూర్తి చెల్లింపు వివరాలు', 'Repayment schedule':'తిరిగి చెల్లింపు పట్టిక', 'Download CSV ↓':'CSV డౌన్‌లోడ్ ↓',
    'Month':'నెల', 'Payment':'చెల్లింపు', 'Principal':'అసలు మొత్తం', 'Interest':'వడ్డీ', 'Balance':'మిగిలిన బకాయి',
    'Bid amount (₹)':'వేలం తగ్గింపు (₹)', 'Monthly payment (₹)':'నెలవారీ చెల్లింపు (₹)', 'Amount received':'అందుకున్న మొత్తం',
    'Received − total paid':'అందుకున్న మొత్తం − మొత్తం చెల్లింపు', 'Difference ÷ months':'తేడా ÷ నెలలు',
    'Monthly rate':'నెలవారీ రేటు', 'Annual rate (simple)':'వార్షిక రేటు (సాధారణ)', 'Payment in selected month':'ఎంచుకున్న నెలలో చెల్లింపు',
    'Edit each bid in rupees. The outlined row is your payout month. Chit amounts support ₹10,000 to ₹1 crore.':'ప్రతి వేలం తగ్గింపును రూపాయల్లో మార్చవచ్చు. గీతతో గుర్తించిన వరుస మీరు డబ్బు తీసుకునే నెల. చిట్ మొత్తం ₹10,000 నుంచి ₹1 కోటి వరకు ఉండవచ్చు.',
    'How members, months and payments work':'సభ్యులు, నెలలు, చెల్లింపుల లెక్కింపు విధానం', 'How these estimates work':'ఈ అంచనాలను ఎలా లెక్కిస్తారు',
    'Calculated on your device. Your numbers stay in your browser.':'లెక్కలు మీ పరికరంలోనే జరుగుతాయి. మీరు నమోదు చేసిన వివరాలు మీ బ్రౌజర్‌లోనే ఉంటాయి.',
    'Estimates in Indian rupees (₹).':'అంచనాలు భారత రూపాయల్లో (₹).',
    'Correct the highlighted inputs and calculate again.':'నమోదు చేసిన విలువలను సరిచేసి మళ్లీ లెక్కించండి.', 'Correct the values to compare all months.':'అన్ని నెలలను పోల్చడానికి విలువలను సరిచేయండి.',
    'Members and months must be whole numbers from 1 to 1200.':'సభ్యులు, నెలలు 1 నుంచి 1200 మధ్య పూర్ణ సంఖ్యలు కావాలి.',
    'Use a positive face value, nonnegative contributions and interest, and commission below 100%.':'చిట్ విలువ సున్నా కంటే ఎక్కువగా, చెల్లింపులు సున్నా లేదా అంతకంటే ఎక్కువగా, కమీషన్ 100% కంటే తక్కువగా ఉండాలి.',
    'Chit amount must be between ₹10,000 and ₹1 crore.':'చిట్ మొత్తం ₹10,000 నుంచి ₹1 కోటి మధ్య ఉండాలి.',
    'Choose a payout month within the total months.':'మొత్తం నెలల పరిధిలో డబ్బు తీసుకునే నెలను ఎంచుకోండి.', 'Enter a bid for every month.':'ప్రతి నెలకు వేలం తగ్గింపును నమోదు చేయండి.',
    'Monthly payments must be nonnegative numbers. Clear a payment to use the automatic amount.':'నెలవారీ చెల్లింపులు సున్నా లేదా అంతకంటే ఎక్కువగా ఉండాలి. ఆటోమేటిక్ మొత్తాన్ని వాడటానికి ఆ గడిని ఖాళీ చేయండి.',
    'Final month: bid plus commission must be less than face value.':'చివరి నెలలో వేలం తగ్గింపు, కమీషన్ కలిపిన మొత్తం చిట్ విలువ కంటే తక్కువగా ఉండాలి.',
    'Commission must be 0–100% of face value. Its rupee amount cannot exceed the discount, and the discount cannot exceed face value.':'కమీషన్ చిట్ విలువలో 0–100% మధ్య ఉండాలి. కమీషన్ మొత్తం వేలం తగ్గింపును మించకూడదు; తగ్గింపు చిట్ విలువను మించకూడదు.',
    'Calculators':'కాలిక్యులేటర్లు'
  };
  const explanations = [
    'ఆటోమేటిక్ నెలవారీ చెల్లింపు = ఆ నెలలో అందే మొత్తం ÷ మొత్తం సభ్యులు. పైసాల వరకు రౌండ్ చేస్తారు. ఉదాహరణకు ₹100 − ₹4 కమీషన్ = ₹96. 20 మంది సభ్యులుంటే చెల్లింపు ₹4.80. తరువాతి నెల ₹5 అయితే రెండు నెలల మొత్తం ₹9.80. అన్ని నెలల చెల్లింపులను కలిపితే మొత్తం చెల్లింపు వస్తుంది.',
    'చిట్ విలువ మార్చితే ప్రస్తుత వేలం తగ్గింపులు, మీరు నమోదు చేసిన చెల్లింపులు అదే నిష్పత్తిలో మారుతాయి. సభ్యుల సంఖ్య మార్చితే ఆటోమేటిక్ చెల్లింపులు మారుతాయి; చేతితో నమోదు చేసిన చెల్లింపులు మారవు. ఖాళీ గడిలో కనిపించే మొత్తం ఆటోమేటిక్ లెక్క. దాన్ని తిరిగి వాడటానికి నమోదు చేసిన విలువను తొలగించండి.',
    'మొత్తం నెలలు మార్చితే పట్టిక, డబ్బు తీసుకునే నెలల ఎంపికలు మారుతాయి. కొత్త కాలపరిమితికి అనుగుణంగా అంచనా వేలం తగ్గింపులు సర్దుబాటు అవుతాయి; చివరి నెల తగ్గింపు సున్నా. కాలపరిమితి మార్చిన తరువాత ఈ అంచనాలను పరిశీలించండి. ఉన్న నెలల చేతి చెల్లింపులు అలాగే ఉంటాయి; అదనపు నెలలకు ఆటోమేటిక్ చెల్లింపులు వస్తాయి. తొలగించిన నెలలు మొత్తంలో చేరవు. సభ్యులు, నెలలు వేర్వేరు విలువలు; అవి సమానం కాకపోతే అది మీ ప్రత్యేక అంచనా మాత్రమే.',
    'చివరి నెలకు ముందు: అందే మొత్తం = చిట్ విలువ − వేలం తగ్గింపు. ఈ తగ్గింపులో కమీషన్ కలిపి ఉంటుంది. చివరి నెలలో: అందే మొత్తం = చిట్ విలువ − వేలం తగ్గింపు − కమీషన్. కమీషన్ చిట్ విలువలో శాతం. మీ పథకం వాయిదా పద్ధతి వేరైతే నెలవారీ చెల్లింపులను చేతితో నమోదు చేయండి.',
    'తేడా = అందుకున్న మొత్తం − మొత్తం చెల్లింపు. ధనాత్మక (+) విలువ అంటే చెల్లించినదానికంటే ఎక్కువ అందుకున్నారు; రుణాత్మక (−) విలువ అంటే అందుకున్నదానికంటే ఎక్కువ చెల్లించారు. నెలవారీ తేడా = తేడా ÷ మొత్తం నెలలు. ఉదాహరణ: ₹68,250 − ₹80,875 = −₹12,625; 20 నెలలకు −₹631.25. +₹5,05,000 తేడా ఉంటే నెలకు +₹25,250; −₹5,05,000 అయితే నెలకు −₹25,250. ఇది సగటు లాభం లేదా లోటు; నెలవారీ వాయిదా కాదు.',
    'నెలవారీ రేటు = (అందుకున్న మొత్తం − మొత్తం చెల్లింపు) ÷ అందుకున్న మొత్తం × 100 ÷ మొత్తం నెలలు. వార్షిక రేటు = నెలవారీ రేటు × 12. రెండు రేట్లలోనూ + లేదా − గుర్తు ఉంటుంది. ₹68,250 అందుకుని 20 నెలల్లో ₹80,875 చెల్లిస్తే నెలవారీ రేటు −0.92%, సాధారణ వార్షిక రేటు −11.10%. ఇవి సాధారణ వార్షిక పోలికలు మాత్రమే; చక్రవడ్డీ లేదా నగదు ప్రవాహ IRR కావు.'
  ];
  document.querySelectorAll('#planner details p').forEach((p,i)=>{if(explanations[i])words[p.textContent.trim()]=explanations[i];});
  const general = document.querySelector('main > details');
  if(general){const paragraphs=general.querySelectorAll('p');
    words[paragraphs[0].textContent.trim()]='EMI స్థిర వార్షిక రేటు, నెలనెలా తగ్గే బకాయిపై వడ్డీ, నెలాఖరు చెల్లింపుల ఆధారంగా లెక్కిస్తుంది. అదనపు చెల్లింపులు మొదటి నెల నుంచే మొదలై కాలపరిమితిని తగ్గిస్తాయి. ప్రత్యేకంగా నమోదు చేయకపోతే రుసుములు, పన్నులు, జరిమానాలు చేర్చబడవు. ఫ్లాట్ వడ్డీ మొదటి అసలు మొత్తంపైనే ఉంటుంది. రుణ పోలిక మొత్తం నగదు చెల్లింపును పోలుస్తుంది; APR లేదా ప్రస్తుత విలువను కాదు.';
    words[paragraphs[1].textContent.trim()]='చిట్ లెక్క ఒక వేలానికి సంబంధించినది. వేలం తగ్గింపులో నిర్వాహకుని కమీషన్ ఉంటుంది. మిగిలిన తగ్గింపు గెలిచిన సభ్యునితో సహా అందరికీ సమానంగా పంచబడుతుంది. ఈ లెక్కలో సభ్యుల సంఖ్య వాయిదాల సంఖ్యకు సమానం. పథకం నియమాలు వేరుగా ఉండవచ్చు; భవిష్యత్ వేలం తగ్గింపులు తెలియవు.';
  }
  const patterns = [
    [/^Month (\d+) extra payment in rupees$/,(_,n)=>n+'వ నెల అదనపు చెల్లింపు రూపాయల్లో'],
    [/^(.+) \(recurring\)$/,(_,n)=>n+' (ప్రతి నెల)'],
    [/^Recurring extra payment: (.+)\. A value entered in a month replaces the recurring extra for that month\. Final payment is limited to the remaining balance\.$/,(_,n)=>'ప్రతి నెల అదనపు చెల్లింపు: '+n+'. ఒక నెలలో నమోదు చేసిన మొత్తం ఆ నెల సాధారణ అదనపు చెల్లింపు స్థానంలో వస్తుంది. చివరి చెల్లింపు మిగిలిన బకాయి వరకే ఉంటుంది.'],
    [/^Month (\d+)$/,(_,n)=>n+'వ నెల'], [/^(\d+) months$/,(_,n)=>n+' నెలలు'],
    [/^ALL (\d+) MONTHS$/,(_,n)=>'మొత్తం '+n+' నెలలు'], [/^(\d+)-month payout comparison$/,(_,n)=>n+' నెలల చిట్ పోలిక'],
    [/^Total paid · (\d+) months$/,(_,n)=>'మొత్తం చెల్లింపు · '+n+' నెలలు'], [/^Total paid over (\d+) months$/,(_,n)=>n+' నెలల్లో మొత్తం చెల్లింపు'],
    [/^Difference ÷ (\d+) months$/,(_,n)=>'తేడా ÷ '+n+' నెలలు'], [/^MONTH (\d+) · AMOUNT YOU TAKE OUT$/,(_,n)=>n+'వ నెల · మీరు అందుకునే మొత్తం'],
    [/^Month (\d+) bid amount in rupees$/,(_,n)=>n+'వ నెల వేలం తగ్గింపు రూపాయల్లో'], [/^Month (\d+) payment in rupees$/,(_,n)=>n+'వ నెల చెల్లింపు రూపాయల్లో'],
    [/^(.+) \(auto\)$/,(_,n)=>n+' (ఆటోమేటిక్)'], [/^Principal (.+)$/,(_,n)=>'అసలు మొత్తం '+n], [/^Interest (.+)$/,(_,n)=>'వడ్డీ '+n],
    [/^Total paid adds all (\d+) monthly payments\. Difference = amount received − total paid, keeping the positive or negative sign\. Monthly difference = difference ÷ (\d+)\. This is the average monthly gain or shortfall, not the installment payment\.$/,(_,n,m)=>'మొత్తం చెల్లింపు అంటే '+n+' నెలల చెల్లింపుల మొత్తం. తేడా = అందుకున్న మొత్తం − మొత్తం చెల్లింపు; + లేదా − గుర్తుతో చూపిస్తాం. నెలవారీ తేడా = తేడా ÷ '+m+'. ఇది నెలకు సగటు లాభం లేదా లోటు, వాయిదా కాదు.'],
    [/^Includes (.+) extra each month\. Final payment is adjusted\.$/,(_,n)=>'ప్రతి నెల '+n+' అదనపు చెల్లింపు కలిపి ఉంటుంది. చివరి చెల్లింపు సర్దుబాటు అవుతుంది.'],
    [/^Loan ([AB]) has the lower total cash outflow\. Fees are paid upfront\.$/,(_,n)=>'రుణం '+n+' మొత్తం చెల్లింపు తక్కువ. రుసుములు ముందుగానే చెల్లిస్తారు.'],
    [/^Dividend pool: (.+)\. This is one auction, not a full-cycle return\.$/,(_,n)=>'సభ్యులకు పంచే మొత్తం: '+n+'. ఇది ఒక వేలం లెక్క మాత్రమే; పూర్తి చిట్ కాలపరిమితి రాబడి కాదు.'],
    [/^(.+): enter a valid nonnegative number \(up to 1 trillion\)\.$/,(_,l)=>translate(l)+': సున్నా లేదా అంతకంటే ఎక్కువ సరైన సంఖ్యను నమోదు చేయండి (గరిష్ఠం 1,000,000,000,000).'],
    [/^(.+) must be greater than zero\.$/,(_,l)=>translate(l)+' సున్నా కంటే ఎక్కువగా ఉండాలి.'],
    [/^(.+): use a whole number from 1 to 1200\.$/,(_,l)=>translate(l)+': 1 నుంచి 1200 మధ్య పూర్ణ సంఖ్యను నమోదు చేయండి.'],
    [/^Month (\d+): bid must be between zero and less than the face value\.$/,(_,n)=>n+'వ నెల: వేలం తగ్గింపు సున్నా లేదా అంతకంటే ఎక్కువగా, చిట్ విలువ కంటే తక్కువగా ఉండాలి.'],
    [/^Month (\d+): bid must include at least (.+) commission\.$/,(_,n,x)=>n+'వ నెల: వేలం తగ్గింపులో కనీసం '+x+' కమీషన్ ఉండాలి.']
  ];
  function translate(text){if(words[text])return words[text];for(const [pattern,render] of patterns){const match=text.match(pattern);if(match)return render(...match);}return text;}
  const sources=new WeakMap(),attributes=new WeakMap();
  let language='en';try{language=localStorage.getItem('calculator-language')==='te'?'te':'en';}catch{}
  const control=document.createElement('div');control.className='language-control';
  control.innerHTML='<label for="language-choice">Language / భాష</label><select id="language-choice" aria-label="Language / భాష"><option value="en" lang="en">English</option><option value="te" lang="te">తెలుగు</option></select>';
  document.querySelector('header').append(control);
  const choice=control.querySelector('select');choice.value=language;
  const observer=new MutationObserver(applyLanguage);
  function applyLanguage(){
    observer.disconnect();
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;
    while((node=walker.nextNode())){
      if(node.parentElement.closest('script,style,.language-control'))continue;
      let entry=sources.get(node);if(!entry||node.nodeValue!==entry.rendered)entry={source:node.nodeValue};
      const raw=entry.source,trimmed=raw.trim();entry.rendered=language==='te'?raw.replace(trimmed,translate(trimmed)):raw;
      if(node.nodeValue!==entry.rendered)node.nodeValue=entry.rendered;sources.set(node,entry);
    }
    document.querySelectorAll('[aria-label],[placeholder]').forEach(el=>{
      if(el.closest('.language-control'))return;const state=attributes.get(el)||{};
      for(const key of ['aria-label','placeholder']){if(!el.hasAttribute(key))continue;let entry=state[key];const current=el.getAttribute(key);if(!entry||current!==entry.rendered)entry={source:current};entry.rendered=language==='te'?translate(entry.source):entry.source;if(current!==entry.rendered)el.setAttribute(key,entry.rendered);state[key]=entry;}attributes.set(el,state);
    });
    document.documentElement.lang=language==='te'?'te':'en';
    document.title=language==='te'?'రుణ EMI మరియు చిట్ ఫండ్ కాలిక్యులేటర్':'Loan EMI Calculator & Advanced Chit Fund Calculator';
    observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','placeholder']});
  }
  choice.addEventListener('change',()=>{language=choice.value;try{localStorage.setItem('calculator-language',language);}catch{}applyLanguage();});
  applyLanguage();
})();
