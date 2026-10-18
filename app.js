'use strict';
const COMMON = ['입주계약 신청서', '실제 사업내용에 맞춘 사업계획서', '입주계약서 (안내서 기준 2부, 최신 제출 방식 확인)', '사업자등록증 또는 법인등기사항증명서'];
const PROPERTY = ['건물 등기사항증명서', '집합건축물대장 전유부'];
const SAFETY = ['안전관리계획서 및 관리기관이 요구하는 개인정보 동의서 등 부속서식'];
const PROCEDURES = [
 {id:'entry',group:'입주 준비',title:'지식산업센터 신규 입주계약',description:'분양·매매·경락·임차 등 입주 경위를 확인하고, 실제 영위할 사업과 해당 호실의 입주 가능 여부를 검토합니다.',steps:['입주자격·업종 확인','소유·임대 관련 절차 확인','입주신청·사업계획 제출','심사 후 계약 체결'],docs:COMMON,rent:['임대인의 임대신고 관련 서류 확인','임대차계약서 및 건물 등기·건축물대장 등 임대 관련 자료'],own:['취득 방식에 해당하는 자료: 분양계약서 또는 매매계약서, 경락 시 경락대금 완납증명서','분양·매매 시 양도인 측 처분신고 관련 자료 확인',...PROPERTY],note:'취득 방식별 해당 자료를 준비하는 목록입니다. 분양·매매·경락 자료를 모두 제출한다는 뜻은 아닙니다. 임대인·양도인과 입주 신청인의 서류를 구분하고, 입주계약 후 업종별 완료·개시 신고도 확인합니다.',pages:'45~46'},
 {id:'name',group:'계약 변경',title:'상호·대표자 변경',description:'상호나 대표자가 바뀐 경우 입주계약 변경 여부와 소유관계의 변동을 함께 확인합니다.',steps:['변경내용 확인','증빙서류 준비','변경계약 신청'],docs:['입주계약 변경 신청서','변경된 사업자등록증 또는 법인등기사항증명서'],own:['소유권 변동 확인용 변경 전·후 주주명부 (각 1부, 적용 여부 확인)'],note:'사업자등록이나 법인등기를 변경한 것만으로 산업단지 입주계약이 자동 정정되는 것은 아닙니다.',pages:'47'},
 {id:'industry',group:'계약 변경',title:'업종 변경·추가',description:'추가하려는 사업의 실제 내용과 입주 허용 업종을 먼저 검토합니다.',steps:['추가 업종 적합성 검토','사업계획 보완','변경계약 신청','후속 신고 확인'],docs:['입주계약 변경 신청서','사업자등록증 또는 법인등기사항증명서','추가 업종의 사업계획서'],note:'현재 계약 업종과 다른 사업을 시작하기 전 관리기관에 적용 절차를 확인하세요. 업종에 따라 시설·설비 및 추가 인허가 검토가 필요합니다.',pages:'47'},
 {id:'area',group:'계약 변경',title:'면적 변경·호실 추가',description:'같은 지식산업센터에서 사업장을 확장하는 경우 변경 면적과 사용 권원을 확인합니다.',steps:['호실·면적 확인','사용권원·배치도 준비','변경계약 신청','후속 등록사항 확인'],docs:['입주계약 변경 신청서','추가 호실의 사업계획서·장비명세·배치도',...PROPERTY],rent:['임대인의 임대신고 관련 자료','추가 호실 임대차계약서','사업자등록증 사본'],own:['양도인 측 처분신고 관련 자료','해당 분양·매매·경매 관련 계약·취득 자료'],note:'안내서의 구비서류는 같은 센터 내 호실 추가 사례를 중심으로 합니다. 면적 감소·분할·다른 센터로의 이전은 실제 내용에 따라 별도 확인이 필요합니다.',pages:'48'},
 {id:'corporation',group:'계약 변경',title:'개인사업자의 법인 전환',description:'개인사업에서 법인사업으로 전환할 때 계약 주체와 사업장 소유권의 변화를 확인합니다.',steps:['전환 방식 확인','법인·사업장 증빙 준비','변경계약 신청'],docs:['입주계약 변경 신청서','주주명부','법인등기사항전부증명서 (말소사항 포함)','법인 전환 전·후 사업자등록증'],own:['현물출자 등 부동산 소유권 이전 증빙 (해당 시)','법인 합병 등 관련 증빙 (해당 시)'],note:'임차기업과 자가기업의 제출서류가 다릅니다. 사업 양수도·현물출자·합병 등 전환 방식별 증빙을 구분합니다.',pages:'48~49'},
 {id:'succession',group:'계약 변경',title:'상속·분할·합병에 따른 변경',description:'상속 또는 법인 분할·합병에 따른 소유권 이전의 사실과 계약 승계 요건을 확인합니다.',steps:['승계 사유 확인','소유권·법인 자료 준비','변경계약 신청'],docs:['입주계약 변경 신청서',...PROPERTY,'상속·법인 분할·합병을 증명하는 서류 (해당 사실에 맞는 자료)'],note:'명의 변경과 사업 실체의 변경을 구분하여 검토합니다. 임차기업의 계약 승계는 계약 관계에 따라 관리기관에 확인해야 합니다.',pages:'47'},
 {id:'factory',group:'입주 후 신고',title:'공장설립완료 신고 · 제조업',description:'입주계약 후 직접 제조시설을 설치한 기업의 완료 신고와 공장등록 절차입니다.',steps:['제조시설 설치 완료','완료신고·증빙 제출','현장확인','공장등록'],docs:['공장설립완료 신고서',...SAFETY,'사업자등록증 또는 법인등기사항증명서','제조시설명세서'],own:PROPERTY,note:'2023년 안내서는 최종 건축물 사용승인 및 기계·장치 설치 완료 시점과 관련하여 2개월 이내 신고를 안내합니다. 사업장별 정확한 기산일과 적용 요건은 관리기관에 확인하세요.',pages:'50'},
 {id:'start',group:'입주 후 신고',title:'사업개시 신고 · 비제조업',description:'프로그래밍·엔지니어링 등 비제조업이 입주계약의 사업계획에 따라 시설·장비를 갖추고 실제 사업을 영위함을 신고합니다.',steps:['시설·장비 및 사업 준비','사업 영위 증빙 확보','사업개시 신고','현장확인·등록'],docs:['사업개시 신고서',...SAFETY,'사업자등록증 또는 법인등기사항증명서','시설 구입 증빙, 용역계약서, 매출세금계산서 등 실제 사업 영위 증빙'],own:PROPERTY,note:'입주계약만으로 사업개시 신고가 대체되지 않습니다. 제출 시점과 증빙 범위는 실제 사업 개시 상황을 기준으로 확인합니다.',pages:'51'},
 {id:'oem',group:'입주 후 신고',title:'사업개시 신고 · OEM 방식',description:'직접 생산시설을 갖추지 않은 OEM 방식은 안내서가 제시한 제조활동 요건과 사업 영위 증빙을 확인합니다.',steps:['사업 형태 검토','OEM 요건별 증빙 준비','사업개시 신고','현장확인'],docs:['사업개시 신고서',...SAFETY,'사업자등록증 또는 법인등기사항증명서','직접 제품 기획 증빙: 디자인 시안·작업지시서 등','자기계정 원재료 구입·제공 증빙: 임가공계약서·매입자료 등','자기명의 제조 증빙: 제품 표시·상표 관련 자료 등','자기 책임으로 인수·판매한 증빙: 발주·납품·매출 자료 등'],own:['건물 등기사항증명서'],note:'안내서는 직접 제조시설이 없는 OEM의 경우 공장등록과 구분하여 사업개시 신고를 안내합니다. 위탁생산의 실질과 최신 산업분류·관리기준을 개별 확인해야 합니다.',pages:'52'},
 {id:'move',group:'이전·임대·처분',title:'단지 내 이전',description:'안내서의 특례 사례는 같은 산업단지에서 공장등록을 마친 임차 제조기업이 동일 사업내용으로 다른 사업장을 임차해 이전하는 경우입니다.',steps:['기존 등록·이전 조건 확인','새 사업장 자료 준비','변경계약 또는 신규절차','등록사항 정리'],docs:['기존 입주계약·공장등록 자료','이전 예정 사업장 사업계획서·배치도·생산시설명세',...PROPERTY],rent:['입주계약 변경 신청서','새 임대인의 임대신고 관련 자료','새 사업장 임대차계약서','기존 주소의 공장등록증 사본'],own:['자가기업의 입주계약 변경 및 신규 공장등록 절차 확인'],note:'안내서의 단지 내 이전 절차는 특정 임차 제조기업에 관한 안내입니다. 자가기업, 비제조업, 업종이 바뀌는 이전에는 같은 절차가 자동 적용되지 않습니다.',pages:'49'},
 {id:'lease',group:'이전·임대·처분',title:'임대신고·임대사업자 전환',description:'사업장을 임대하거나 소유 시설 전부를 임대사업으로 전환할 경우 임대 가능 요건과 계약 변경을 확인합니다.',steps:['임대 가능 요건 검토','일부·전부 임대 구분','임대신고·변경계약','임차기업 입주절차'],docs:['임대신고서 및 임대차계약서 (임대신고 시)',...PROPERTY,'입주계약 변경 신청서 (임대사업자 전환 시)','임대사업자용 사업계획서·입주계약서 (전환 시)','부동산임대업을 포함한 사업자등록증 (전환 시)'],note:'임대인 기준의 절차입니다. 임차 중인 사업장을 다시 빌려주는 전대가 허용된다는 뜻이 아닙니다. 전부 임대 시 전환 요건·유지기간 등 제한을 최신 기준으로 확인합니다.',pages:'46, 53',fixedTenure:true},
 {id:'disposal',group:'이전·임대·처분',title:'매각·양도 및 처분신청',description:'보유한 산업용지·공장 등을 처분할 때 취득 경위, 등록·개시 시점, 시설 종류에 따라 처분신청 또는 처분신고 대상인지 검토합니다.',steps:['처분 제한·유형 확인','신청 또는 신고 준비','관리기관 절차 이행','양수인 입주계약'],docs:['기존 입주계약 및 공장등록·사업개시 관련 자료',...PROPERTY,'처분신청서 또는 처분신고서 (적용 유형에 맞게 선택)','처분신청 시 감정평가서 등 해당 요건의 증빙','거래계약 및 양수인 입주 관련 자료 (해당 단계에서 준비)'],note:'‘처분신청’과 ‘처분신고’는 같은 절차가 아닙니다. 안내서의 기간·대상 요건을 모든 지식산업센터 거래에 일괄 적용하지 말고, 소유권 이전 전에 관할기관에 적용 여부를 확인하세요.',pages:'45, 53~54',fixedTenure:true},
 {id:'termination',group:'이전·임대·처분',title:'입주계약 해지',description:'사업장 이전 등으로 현재 사업장의 입주계약을 종료할 때 필요한 정리 절차를 확인합니다.',steps:['종료 사유 확인','관련 신고 구분','해지 신청 또는 처분절차','처리 확인'],docs:['기존 입주계약 정보와 이전·폐업 등 사유 관련 자료'],rent:['입주계약 해지 신청서'],own:['매각 시 처분신고 등 적용 절차 확인'],note:'안내서는 임차기업의 해지 신청과 자가기업의 매각·처분 절차를 구분합니다. 세무서의 폐업 신고만으로 산단 계약관계가 모두 정리되었다고 판단하지 않도록 확인합니다.',pages:'53'}
];
function getProcedure(id,tenure){
 const item=PROCEDURES.find(x=>x.id===id)||PROCEDURES[0];
 return {...item,documents:[...item.docs,...(!item.fixedTenure?(item[tenure]||[]):[])]};
}
function escapeHTML(text){return String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
if(typeof document !== 'undefined'){
 const $=s=>document.querySelector(s);
 const selected=$('#procedure-select'),tenure=$('#tenure'),result=$('#guide-result');
 let active,toastTimer;
 const groups=[...new Set(PROCEDURES.map(p=>p.group))];
 selected.innerHTML=groups.map(g=>`<optgroup label="${g}">${PROCEDURES.filter(p=>p.group===g).map(p=>`<option value="${p.id}">${p.title}</option>`).join('')}</optgroup>`).join('');
 function showToast(text){$('#toast').textContent=text;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3500);}
 function renderGuide(){
  active=getProcedure(selected.value,tenure.value);
  tenure.disabled=!!active.fixedTenure;
  result.innerHTML=`<span class="result-badge">${active.group} · ${active.fixedTenure?'소유자·임대인 기준':tenure.value==='own'?'자가 사업장':'임차 사업장'}</span><h3>${active.title}</h3><p class="result-subtitle">${active.description}</p><ol class="mini-flow">${active.steps.map(s=>`<li>${s}</li>`).join('')}</ol><div class="doc-heading"><h4>상담·준비서류 체크리스트</h4><span id="checked-count">0 / ${active.documents.length} 확인</span></div><ul class="checklist">${active.documents.map((d,i)=>`<li><label for="doc-${i}"><input type="checkbox" id="doc-${i}"><span>${d}</span></label></li>`).join('')}</ul><p class="result-note">${active.note}</p><p class="result-source">출처: 한국산업단지공단 입주절차 안내 (2023.10), 본문 ${active.pages}쪽 · 최신 제출서류는 서울지역본부에 확인</p><div class="result-actions"><button class="button primary" id="download-checklist" type="button">체크리스트 저장 ↓</button><button class="button outline" id="print-guide" type="button">인쇄 / PDF</button><a class="button outline" href="#contact">상담 연결 ↗</a></div>`;
  result.querySelectorAll('input[type="checkbox"]').forEach(input=>input.addEventListener('change',()=>{$('#checked-count').textContent=`${result.querySelectorAll('input:checked').length} / ${active.documents.length} 확인`;}));
  $('#download-checklist').addEventListener('click',downloadChecklist);
  $('#print-guide').addEventListener('click',()=>window.print());
 }
 function checklistText(){
  const checks=[...result.querySelectorAll('input[type="checkbox"]')];
  return `위더스행정사 | G밸리 행정절차\n${active.title}\n${active.fixedTenure?'소유자·임대인 기준':tenure.options[tenure.selectedIndex].text}\n\n진행 순서\n${active.steps.map((x,i)=>`${i+1}. ${x}`).join('\n')}\n\n준비서류 (상담용)\n${active.documents.map((d,i)=>`${checks[i]?.checked?'[✓]':'[ ]'} ${d}`).join('\n')}\n\n확인사항\n${active.note}\n\n자료 기준: 한국산업단지공단 입주절차 안내 (2023.10), 본문 ${active.pages}쪽. 최종 제출서류·적용 요건은 최신 법령과 관할기관 안내를 확인하세요.\n상담: 02-808-1253 / webtycoon@naver.com\n`;
 }
 function downloadChecklist(){const blob=new Blob(['\uFEFF',checklistText()],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`위더스_준비서류_${active.id}.txt`;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);showToast('체크리스트를 내려받았습니다.');}
 selected.addEventListener('change',renderGuide);tenure.addEventListener('change',renderGuide);renderGuide();
 const menu=$('.menu-button');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));$('#nav').classList.toggle('open',open);});
 $('#nav').querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');$('#nav').classList.remove('open');}));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');$('#nav').classList.remove('open');}});
 function consultationText(){return `[위더스행정사 상담 문의]\n상담 업무: ${$('#topic').value}\n\n사업장·업무 상황:\n${$('#situation').value.trim()||'(메일에서 내용을 추가해 주세요.)'}\n\n회신 연락처: (메일에서 직접 입력해 주세요.)`;}
 $('#consult-form').addEventListener('submit',event=>{event.preventDefault();const subject=`[위더스 상담] ${$('#topic').value}`;window.location.href=`mailto:webtycoon@naver.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(consultationText())}`;$('#form-status').textContent='메일 앱에서 내용을 확인한 뒤 직접 발송해 주세요. 앱이 열리지 않으면 내용을 복사하여 webtycoon@naver.com으로 보내주세요.';});
 $('#copy-consult').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(consultationText());$('#form-status').textContent='상담 내용을 복사했습니다. 원하는 메일 앱에 붙여 넣어 주세요.';}catch{const text=document.createElement('textarea');text.value=consultationText();text.setAttribute('readonly','');text.style.position='fixed';text.style.left='-9999px';document.body.append(text);text.select();const copied=document.execCommand('copy');text.remove();$('#form-status').textContent=copied?'상담 내용을 복사했습니다.':'복사가 지원되지 않습니다. 입력 내용을 직접 복사해 주세요.';}});
}
if(typeof module!=='undefined')module.exports={PROCEDURES,getProcedure,escapeHTML};
