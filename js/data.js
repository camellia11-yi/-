// 人格类型数据
const PERSONALITIES = [
  {
    id: 'zhenhuan',
    name: '甄嬛型',
    role: '甄嬛',
    title: '聪慧坚韧的宫廷智者',
    image: 'assets/characters/zhenhuan.png',
    keywords: ['聪慧', '坚韧', '隐忍', '谋略', '成长型'],
    analysis: '你拥有甄嬛式的智慧与韧性。初入宫廷时天真烂漫，经历风雨后逐渐成长为深谋远虑的宫廷智者。你善于在逆境中寻找机会，懂得审时度势，能够在复杂的环境中保护自己并最终达成目标。你的成长轨迹证明了"不经一番寒彻骨，怎得梅花扑鼻香"。',
    characterAnalysis: '甄嬛从天真少女成长为太后，经历了从单纯到深沉的蜕变。她既有善良温柔的一面，也有果断狠辣的一面。在权力斗争中，她学会了利用规则、借力打力，最终成为后宫最大的赢家。这与你在生活中展现出的适应能力和成长潜力高度契合。',
    shareText: '我测出了【甄嬛型人格】——聪慧坚韧的宫廷智者。不经一番寒彻骨，怎得梅花扑鼻香。你也来测测看你是《甄嬛传》里的谁？',
    weights: { power: 4, emotion: 3, social: 4, stress: 5, moral: 3 }
  },
  {
    id: 'huafei',
    name: '华妃型',
    role: '华妃',
    title: '骄傲热烈的宫廷玫瑰',
    image: 'assets/characters/huafei.png',
    keywords: ['骄傲', '热烈', '直率', '专情', '悲剧美'],
    analysis: '你拥有华妃式的骄傲与热烈。你敢爱敢恨，从不掩饰自己的情感与野心。你的骄傲源于真实的实力与家世，你的热烈源于对爱情的执着追求。虽然有时过于直率会带来麻烦，但你的真诚与热情也让你成为人群中最耀眼的存在。',
    characterAnalysis: '华妃年世兰是后宫中最骄傲的存在，她的骄傲源于年家的权势和皇帝的宠爱。她爱得热烈，恨得彻底，从不屑于玩弄心机。她的悲剧在于过于依赖外在的权力和爱情，当这些失去时，她选择了以死明志。这提醒你在追求目标时也要保持内心的独立。',
    shareText: '我测出了【华妃型人格】——骄傲热烈的宫廷玫瑰。贱人就是矫情，但本宫就是喜欢这样活着。你也来测测看你是《甄嬛传》里的谁？',
    weights: { power: 5, emotion: 5, social: 2, stress: 2, moral: 2 }
  },
  {
    id: 'shenmeizhuang',
    name: '沈眉庄型',
    role: '沈眉庄',
    title: '温婉坚定的清流君子',
    image: 'characters/shenmeizhuang.png',
    keywords: ['温婉', '坚定', '清高', '重情', '傲骨'],
    analysis: '你拥有沈眉庄式的温婉与坚定。你外表温和大方，内心却有着不可动摇的原则与傲骨。你看重真情，不屑于虚伪的社交游戏。当被伤害后，你选择保持距离而非报复，这种清高的姿态让你在复杂的环境中保持着内心的纯净。',
    characterAnalysis: '沈眉庄是后宫中难得的清流，她出身名门，知书达理，却不愿随波逐流。被皇帝误解后，她选择了冷眼旁观，将真心给了值得的人。她与甄嬛的友情是后宫中最真挚的情感之一。她的故事告诉我们，保持本心比获得权力更重要。',
    shareText: '我测出了【沈眉庄型人格】——温婉坚定的清流君子。宁可枝头抱香死，何曾吹落北风中。你也来测测看你是《甄嬛传》里的谁？',
    weights: { power: 2, emotion: 4, social: 3, stress: 3, moral: 5 }
  },
  {
    id: 'anlingrong',
    name: '安陵容型',
    role: '安陵容',
    title: '敏感多疑的悲剧灵魂',
    image: 'assets/characters/anlingrong.png',
    keywords: ['敏感', '自卑', '多疑', '才华', '悲剧'],
    analysis: '你拥有安陵容式的敏感与才华。你内心细腻，善于观察，有着不输他人的才华与能力。然而，过度的敏感和自卑让你容易陷入自我怀疑，对他人的善意也常产生误解。学会接纳自己、信任他人，是你人生的重要课题。',
    characterAnalysis: '安陵容出身低微，却有着不输他人的才华。她的悲剧源于深深的自卑和对他人善意的误解。她本可以与甄嬛成为挚友，却因多疑和嫉妒走向了对立面。她的故事警示我们，自卑和猜疑会毁掉最美好的可能性。',
    shareText: '我测出了【安陵容型人格】——敏感多疑的悲剧灵魂。人生若只如初见，何事秋风悲画扇。你也来测测看你是《甄嬛传》里的谁？',
    weights: { power: 3, emotion: 2, social: 2, stress: 2, moral: 2 }
  },
  {
    id: 'huanghou',
    name: '皇后型',
    role: '皇后',
    title: '深沉隐忍的权力掌控者',
    image: 'assets/characters/huanghou.png',
    keywords: ['深沉', '隐忍', '权谋', '母仪', '悲剧'],
    analysis: '你拥有皇后式的深沉与隐忍。你善于隐藏真实情感，在表面温和的背后运筹帷幄。你追求权力和地位，但你的手段往往更加隐蔽和长远。你的悲剧在于，为了权力你牺牲了太多，包括真实的自我和纯粹的情感。',
    characterAnalysis: '皇后宜修是后宫中最深沉的存在，她表面母仪天下，实则心机深沉。她的悲剧在于，为了保住皇后的位置，她失去了做母亲和做妻子的资格。她的一生都在算计中度过，最终却输给了更年轻的甄嬛。这提醒我们，权力不是人生的全部。',
    shareText: '我测出了【皇后型人格】——深沉隐忍的权力掌控者。臣妾做不到啊，但臣妾必须做到。你也来测测看你是《甄嬛传》里的谁？',
    weights: { power: 5, emotion: 2, social: 4, stress: 4, moral: 1 }
  },
  {
    id: 'jingfei',
    name: '敬妃型',
    role: '敬妃',
    title: '淡泊明哲的生存智者',
    image: 'characters/jingfei.png',
    keywords: ['淡泊', '明哲', '稳重', '可靠', '智慧'],
    analysis: '你拥有敬妃式的淡泊与智慧。你不争不抢，却能在宫廷的风云变幻中安然生存。你懂得审时度势，知道何时该进、何时该退。你的稳重和可靠让你成为他人信赖的对象，你的淡泊让你在名利场中保持着内心的平静。',
    characterAnalysis: '敬妃是后宫中最清醒的存在，她从不参与争斗，却能在每一次风波中全身而退。她收养胧月公主，与甄嬛结盟，最终成为太妃，安享晚年。她的故事告诉我们，有时候不争才是最大的智慧。',
    shareText: '我测出了【敬妃型人格】——淡泊明哲的生存智者。不争不抢，自有天意。你也来测测看你是《甄嬛传》里的谁？',
    weights: { power: 2, emotion: 3, social: 4, stress: 5, moral: 4 }
  },
  {
    id: 'guojunwang',
    name: '果郡王型',
    role: '果郡王',
    title: '深情浪漫的理想主义者',
    image: 'characters/guojunwang.png',
    keywords: ['深情', '浪漫', '理想', '才华', '牺牲'],
    analysis: '你拥有果郡王式的深情与浪漫。你追求纯粹的爱情和理想，愿意为所爱之人付出一切。你的浪漫和才华让你在人群中独具魅力，但你的理想主义有时会让你与现实产生冲突。你的深情是珍贵的，但也要学会保护自己。',
    characterAnalysis: '果郡王允礼是剧中最深情的男性角色，他对甄嬛的爱纯粹而炽热。他才华横溢，风度翩翩，却因爱情而卷入宫廷斗争，最终为爱牺牲。他的故事告诉我们，纯粹的爱情是珍贵的，但在现实面前也需要智慧和分寸。',
    shareText: '我测出了【果郡王型人格】——深情浪漫的理想主义者。愿得一心人，白首不相离。你也来测测看你是《甄嬛传》里的谁？',
    weights: { power: 1, emotion: 5, social: 3, stress: 2, moral: 5 }
  },
  {
    id: 'yelanyi',
    name: '叶澜依型',
    role: '叶澜依',
    title: '桀骜不驯的自由灵魂',
    image: 'characters/yelanyi.png',
    keywords: ['桀骜', '自由', '专情', '勇敢', '洒脱'],
    analysis: '你拥有叶澜依式的桀骜与自由。你不愿被世俗规则束缚，追求内心的真实和自由。你敢爱敢恨，为所爱之人可以付出一切。你的洒脱和勇敢让你在人群中独树一帜，但有时也会让你显得格格不入。',
    characterAnalysis: '叶澜依是后宫中最特别的存在，她本是驯马女，因酷似华妃而被纳入后宫。她从不掩饰对皇帝的厌恶，却对果郡王怀有深深的爱意。她最终为果郡王报仇，选择了自我了断。她的故事告诉我们，真正的自由来自于内心的坚守。',
    shareText: '我测出了【叶澜依型人格】——桀骜不驯的自由灵魂。我命由我不由天。你也来测测看你是《甄嬛传》里的谁？',
    weights: { power: 1, emotion: 5, social: 1, stress: 3, moral: 4 }
  },
  {
    id: 'huanbi',
    name: '浣碧型',
    role: '浣碧',
    title: '心高气傲的奋斗者',
    image: 'characters/huanbi.png',
    keywords: ['心高', '奋斗', '嫉妒', '渴望', '悲剧'],
    analysis: '你拥有浣碧式的心高与奋斗。你渴望被认可，渴望获得与身份匹配的地位和尊重。你努力奋斗，不甘心屈居人下。然而，过度的嫉妒和攀比有时会让你做出错误的选择。学会接纳自己的出身，找到真正属于自己的道路。',
    characterAnalysis: '浣碧是甄嬛的同父异母妹妹，却因私生女的身份只能做丫鬟。她心高气傲，不甘心低人一等，曾一度背叛甄嬛。最终她嫁给了果郡王，却在果郡王死后随之而去。她的悲剧在于，她一生都在追求一个不属于自己的位置。',
    shareText: '我测出了【浣碧型人格】——心高气傲的奋斗者。我命由我不由天，但天意弄人。你也来测测看你是《甄嬛传》里的谁？',
    weights: { power: 4, emotion: 3, social: 2, stress: 3, moral: 2 }
  },
  {
    id: 'cuijinxi',
    name: '崔槿汐型',
    role: '崔槿汐',
    title: '忠诚智慧的守护者',
    image: 'characters/cuijinxi.png',
    keywords: ['忠诚', '智慧', '稳重', '可靠', '深情'],
    analysis: '你拥有崔槿汐式的忠诚与智慧。你是他人最可靠的伙伴，懂得在关键时刻给予支持和建议。你的智慧来自于丰富的阅历，你的忠诚来自于内心的坚定。你愿意为所爱之人付出一切，同时也懂得保护自己。',
    characterAnalysis: '崔槿汐是甄嬛最信任的侍女，也是她最可靠的伙伴。她智慧过人，忠诚坚定，在甄嬛最困难的时候始终陪伴左右。她与苏培盛的感情也是剧中难得的温暖。她的故事告诉我们，真正的忠诚来自于内心的选择，而非外在的约束。',
    shareText: '我测出了【崔槿汐型人格】——忠诚智慧的守护者。士为知己者死，女为悦己者容。你也来测测看你是《甄嬛传》里的谁？',
    weights: { power: 2, emotion: 4, social: 5, stress: 4, moral: 5 }
  },
  {
    id: 'duanfei',
    name: '端妃型',
    role: '端妃',
    title: '隐忍坚韧的沉默智者',
    image: 'characters/duanfei.png',
    keywords: ['隐忍', '坚韧', '沉默', '智慧', '复仇'],
    analysis: '你拥有端妃式的隐忍与坚韧。你能在最艰难的环境中默默承受，等待时机的到来。你的沉默不是软弱，而是积蓄力量的方式。当机会来临时，你会以最精准的方式达成目标。你的坚韧让你成为最后的赢家之一。',
    characterAnalysis: '端妃是后宫中最隐忍的存在，她被华妃陷害而终身不孕，却默默忍受了多年。她与甄嬛结盟，最终见证了华妃和皇后的倒台。她的故事告诉我们，有时候沉默和等待是最强大的武器。',
    shareText: '我测出了【端妃型人格】——隐忍坚韧的沉默智者。君子报仇，十年不晚。你也来测测看你是《甄嬛传》里的谁？',
    weights: { power: 3, emotion: 2, social: 3, stress: 5, moral: 3 }
  },
  {
    id: 'wenshichu',
    name: '温实初型',
    role: '温实初',
    title: '深情守护的默默付出者',
    image: 'assets/characters/wenshichu.png',
    keywords: ['深情', '守护', '付出', '医者', '悲剧'],
    analysis: '你拥有温实初式的深情与守护。你愿意默默守护所爱之人，不求回报，只愿她安好。你的付出是无私的，但有时也会让你忽略自己的感受。学会在付出的同时也关爱自己，才能拥有更健康的关系。',
    characterAnalysis: '温实初是甄嬛的青梅竹马，一生都在默默守护她。他作为太医，多次在关键时刻帮助甄嬛。他最终与沈眉庄相爱，却在眉庄死后选择了自宫。他的故事告诉我们，深情是珍贵的，但也要学会为自己而活。',
    shareText: '我测出了【温实初型人格】——深情守护的默默付出者。愿得一人心，白首不相离。你也来测测看你是《甄嬛传》里的谁？',
    weights: { power: 1, emotion: 5, social: 3, stress: 3, moral: 5 }
  },
  {
    id: 'yongzheng',
    name: '雍正型',
    role: '雍正',
    title: '深沉多疑的权力掌控者',
    image: 'characters/yongzheng.png',
    keywords: ['深沉', '多疑', '权力', '孤独', '帝王'],
    analysis: '你拥有雍正式的深沉与多疑。你追求权力和掌控，善于在复杂的局势中运筹帷幄。你的深沉让你难以被看透，你的多疑让你难以真正信任他人。你的成功来自于对权力的执着，但你的孤独也源于此。',
    characterAnalysis: '雍正是整个故事的核心，他深沉多疑，对权力有着极度的渴望。他可以宠爱一个女人，也可以在瞬间将她打入冷宫。他的悲剧在于，他拥有天下，却从未拥有真正的爱情和信任。他的故事告诉我们，权力和孤独往往相伴而生。',
    shareText: '我测出了【雍正型人格】——深沉多疑的权力掌控者。朕即天下，但天下无人懂朕。你也来测测看你是《甄嬛传》里的谁？',
    weights: { power: 5, emotion: 1, social: 2, stress: 4, moral: 2 }
  }
];

// 测试题目数据
const QUESTIONS = [
  // 权力取向 (1-10题)
  {
    id: 1,
    dimension: 'power',
    question: '在职场中，你更倾向于哪种处事方式？',
    options: [
      { text: '主动争取晋升机会，展现自己的能力', weights: { zhenhuan: 3, huafei: 3, huanghou: 2, huanbi: 2 } },
      { text: '做好本职工作，等待机会自然到来', weights: { jingfei: 3, duanfei: 2, cuijinxi: 2, wenshichu: 2 } },
      { text: '不追求权力，更看重内心的平静', weights: { shenmeizhuang: 3, guojunwang: 2, yelanyi: 2 } }
    ]
  },
  {
    id: 2,
    dimension: 'power',
    question: '面对不公平的待遇，你会怎么做？',
    options: [
      { text: '据理力争，维护自己的权益', weights: { huafei: 3, zhenhuan: 2, yelanyi: 2 } },
      { text: '隐忍等待，寻找更好的时机反击', weights: { huanghou: 3, zhenhuan: 2, duanfei: 3, anlingrong: 2 } },
      { text: '选择离开，不与之为伍', weights: { shenmeizhuang: 3, guojunwang: 2, yelanyi: 2 } }
    ]
  },
  {
    id: 3,
    dimension: 'power',
    question: '你认为权力的本质是什么？',
    options: [
      { text: '掌控他人，实现自己的意志', weights: { huanghou: 3, yongzheng: 3, huafei: 2 } },
      { text: '保护自己和所爱之人的工具', weights: { zhenhuan: 3, cuijinxi: 2, huanbi: 2 } },
      { text: '身外之物，不值得过分追求', weights: { shenmeizhuang: 3, jingfei: 3, guojunwang: 2 } }
    ]
  },
  {
    id: 4,
    dimension: 'power',
    question: '如果有机会获得更高的地位，但需要牺牲一些原则，你会？',
    options: [
      { text: '为了目标可以适当妥协', weights: { huanghou: 3, anlingrong: 3, huanbi: 2 } },
      { text: '坚守原则，宁可放弃机会', weights: { shenmeizhuang: 3, guojunwang: 3, wenshichu: 2 } },
      { text: '看情况，权衡利弊后决定', weights: { zhenhuan: 3, jingfei: 2, duanfei: 2 } }
    ]
  },
  {
    id: 5,
    dimension: 'power',
    question: '在团队中，你更喜欢扮演什么角色？',
    options: [
      { text: '领导者，掌控全局', weights: { huanghou: 3, yongzheng: 3, huafei: 2 } },
      { text: '核心成员，发挥关键作用', weights: { zhenhuan: 3, cuijinxi: 3, duanfei: 2 } },
      { text: '支持者，默默贡献力量', weights: { wenshichu: 3, jingfei: 2, shenmeizhuang: 2 } }
    ]
  },
  {
    id: 6,
    dimension: 'power',
    question: '面对竞争对手，你的策略是？',
    options: [
      { text: '正面交锋，用实力说话', weights: { huafei: 3, yelanyi: 2, zhenhuan: 2 } },
      { text: '暗中布局，等待时机', weights: { huanghou: 3, duanfei: 3, zhenhuan: 2 } },
      { text: '不与人争，专注自己', weights: { jingfei: 3, shenmeizhuang: 3, guojunwang: 2 } }
    ]
  },
  {
    id: 7,
    dimension: 'power',
    question: '你认为成功最重要的因素是什么？',
    options: [
      { text: '权力和资源', weights: { huanghou: 3, yongzheng: 3, huafei: 2 } },
      { text: '智慧和策略', weights: { zhenhuan: 3, cuijinxi: 3, duanfei: 2 } },
      { text: '品德和真心', weights: { shenmeizhuang: 3, guojunwang: 3, wenshichu: 2 } }
    ]
  },
  {
    id: 8,
    dimension: 'power',
    question: '如果有人威胁到你的地位，你会？',
    options: [
      { text: '先下手为强，消除威胁', weights: { huanghou: 3, yongzheng: 2, anlingrong: 2 } },
      { text: '观察形势，寻找最佳应对方式', weights: { zhenhuan: 3, duanfei: 3, jingfei: 2 } },
      { text: '退一步海阔天空', weights: { shenmeizhuang: 2, guojunwang: 2, wenshichu: 2 } }
    ]
  },
  {
    id: 9,
    dimension: 'power',
    question: '你对"成王败寇"这句话怎么看？',
    options: [
      { text: '认同，历史由胜利者书写', weights: { huanghou: 3, yongzheng: 3, zhenhuan: 2 } },
      { text: '不完全认同，过程和手段也很重要', weights: { shenmeizhuang: 3, jingfei: 2, cuijinxi: 2 } },
      { text: '不认同，应该有更高的追求', weights: { guojunwang: 3, wenshichu: 2, yelanyi: 2 } }
    ]
  },
  {
    id: 10,
    dimension: 'power',
    question: '你更欣赏哪种历史人物？',
    options: [
      { text: '开创盛世的帝王', weights: { yongzheng: 3, huanghou: 2, huafei: 2 } },
      { text: '运筹帷幄的谋士', weights: { zhenhuan: 3, cuijinxi: 3, duanfei: 2 } },
      { text: '坚守气节的隐士', weights: { shenmeizhuang: 3, guojunwang: 2, yelanyi: 2 } }
    ]
  },
  // 情感表达 (11-19题)
  {
    id: 11,
    dimension: 'emotion',
    question: '当你爱上一个人时，你会？',
    options: [
      { text: '热烈追求，勇敢表达爱意', weights: { huafei: 3, guojunwang: 3, yelanyi: 3 } },
      { text: '默默守护，等待对方发现', weights: { wenshichu: 3, cuijinxi: 2, duanfei: 2 } },
      { text: '谨慎观察，确定后再行动', weights: { zhenhuan: 2, jingfei: 2, shenmeizhuang: 2 } }
    ]
  },
  {
    id: 12,
    dimension: 'emotion',
    question: '面对感情的背叛，你会？',
    options: [
      { text: '果断结束，绝不回头', weights: { yelanyi: 3, huafei: 2, shenmeizhuang: 2 } },
      { text: '痛苦但选择原谅', weights: { anlingrong: 2, wenshichu: 2, huanbi: 2 } },
      { text: '表面原谅，内心记恨', weights: { huanghou: 3, duanfei: 2, zhenhuan: 2 } }
    ]
  },
  {
    id: 13,
    dimension: 'emotion',
    question: '你认为爱情最重要的是什么？',
    options: [
      { text: '激情和浪漫', weights: { huafei: 3, guojunwang: 3, yelanyi: 2 } },
      { text: '信任和理解', weights: { shenmeizhuang: 3, cuijinxi: 3, wenshichu: 2 } },
      { text: '稳定和安全', weights: { jingfei: 3, duanfei: 2, zhenhuan: 2 } }
    ]
  },
  {
    id: 14,
    dimension: 'emotion',
    question: '你更容易被什么样的人吸引？',
    options: [
      { text: '有权势和地位的人', weights: { huafei: 2, huanghou: 2, huanbi: 3 } },
      { text: '有才华和内涵的人', weights: { zhenhuan: 3, shenmeizhuang: 3, guojunwang: 2 } },
      { text: '真诚善良的人', weights: { wenshichu: 3, cuijinxi: 2, jingfei: 2 } }
    ]
  },
  {
    id: 15,
    dimension: 'emotion',
    question: '在感情中，你更倾向于？',
    options: [
      { text: '付出更多的一方', weights: { wenshichu: 3, guojunwang: 2, cuijinxi: 2 } },
      { text: '被爱更多的一方', weights: { huafei: 2, yongzheng: 3, anlingrong: 2 } },
      { text: '追求平等互惠', weights: { zhenhuan: 3, shenmeizhuang: 3, jingfei: 2 } }
    ]
  },
  {
    id: 16,
    dimension: 'emotion',
    question: '当朋友和爱人发生冲突时，你会？',
    options: [
      { text: '站在爱人一边', weights: { huafei: 2, guojunwang: 2, huanbi: 2 } },
      { text: '站在朋友一边', weights: { shenmeizhuang: 3, yelanyi: 2 } },
      { text: '中立调解，不偏不倚', weights: { zhenhuan: 3, jingfei: 3, cuijinxi: 2 } }
    ]
  },
  {
    id: 17,
    dimension: 'emotion',
    question: '你对"一生一世一双人"怎么看？',
    options: [
      { text: '理想很美好，现实很难', weights: { zhenhuan: 2, huanghou: 2, duanfei: 2 } },
      { text: '值得追求，宁缺毋滥', weights: { shenmeizhuang: 3, guojunwang: 3, wenshichu: 3 } },
      { text: '不现实，接受现实就好', weights: { yongzheng: 3, jingfei: 2, anlingrong: 2 } }
    ]
  },
  {
    id: 18,
    dimension: 'emotion',
    question: '你表达爱意的方式是？',
    options: [
      { text: '言语表达，直接热烈', weights: { huafei: 3, guojunwang: 2, yelanyi: 2 } },
      { text: '行动证明，默默付出', weights: { wenshichu: 3, cuijinxi: 3, duanfei: 2 } },
      { text: '含蓄内敛，点到为止', weights: { shenmeizhuang: 3, jingfei: 2, zhenhuan: 2 } }
    ]
  },
  {
    id: 19,
    dimension: 'emotion',
    question: '你认为最不能原谅的感情背叛是？',
    options: [
      { text: '身体出轨', weights: { huafei: 3, shenmeizhuang: 2, yelanyi: 2 } },
      { text: '精神出轨', weights: { zhenhuan: 3, guojunwang: 2, wenshichu: 2 } },
      { text: '欺骗和利用', weights: { huanghou: 3, duanfei: 2, anlingrong: 2 } }
    ]
  },
  // 人际关系 (20-28题)
  {
    id: 20,
    dimension: 'social',
    question: '在社交场合，你通常是？',
    options: [
      { text: '活跃的中心人物', weights: { huafei: 3, guojunwang: 2, zhenhuan: 2 } },
      { text: '安静的观察者', weights: { jingfei: 3, duanfei: 3, anlingrong: 2 } },
      { text: '随和的参与者', weights: { shenmeizhuang: 2, cuijinxi: 3, wenshichu: 2 } }
    ]
  },
  {
    id: 21,
    dimension: 'social',
    question: '你交朋友的标准是？',
    options: [
      { text: '志同道合，三观一致', weights: { shenmeizhuang: 3, zhenhuan: 2, guojunwang: 2 } },
      { text: '有用的人脉资源', weights: { huanghou: 2, huanbi: 2, anlingrong: 2 } },
      { text: '真诚相待，不计较利益', weights: { wenshichu: 3, cuijinxi: 3, yelanyi: 2 } }
    ]
  },
  {
    id: 22,
    dimension: 'social',
    question: '当朋友遇到困难时，你会？',
    options: [
      { text: '全力以赴帮助', weights: { wenshichu: 3, cuijinxi: 3, shenmeizhuang: 3 } },
      { text: '量力而行，适度帮助', weights: { zhenhuan: 2, jingfei: 3, duanfei: 2 } },
      { text: '先考虑对自己是否有影响', weights: { huanghou: 3, anlingrong: 2, huanbi: 2 } }
    ]
  },
  {
    id: 23,
    dimension: 'social',
    question: '你如何处理人际冲突？',
    options: [
      { text: '直接沟通，解决问题', weights: { huafei: 2, yelanyi: 2, zhenhuan: 2 } },
      { text: '回避冲突，保持距离', weights: { jingfei: 3, duanfei: 2, anlingrong: 2 } },
      { text: '寻找中间人调解', weights: { cuijinxi: 3, shenmeizhuang: 2, wenshichu: 2 } }
    ]
  },
  {
    id: 24,
    dimension: 'social',
    question: '你对"多个朋友多条路"怎么看？',
    options: [
      { text: '认同，广交朋友很重要', weights: { zhenhuan: 2, cuijinxi: 3, huafei: 2 } },
      { text: '质量比数量更重要', weights: { shenmeizhuang: 3, guojunwang: 2, wenshichu: 2 } },
      { text: '朋友不在多，在于有用', weights: { huanghou: 2, yongzheng: 3, anlingrong: 2 } }
    ]
  },
  {
    id: 25,
    dimension: 'social',
    question: '你更容易信任什么样的人？',
    options: [
      { text: '有能力、有地位的人', weights: { huafei: 2, huanbi: 2, anlingrong: 2 } },
      { text: '真诚善良的人', weights: { shenmeizhuang: 3, wenshichu: 3, cuijinxi: 3 } },
      { text: '经过时间考验的人', weights: { zhenhuan: 3, jingfei: 2, duanfei: 2 } }
    ]
  },
  {
    id: 26,
    dimension: 'social',
    question: '在团队合作中，你最看重什么？',
    options: [
      { text: '效率和结果', weights: { yongzheng: 3, huanghou: 2, zhenhuan: 2 } },
      { text: '团队和谐', weights: { jingfei: 3, shenmeizhuang: 2, cuijinxi: 2 } },
      { text: '个人贡献被认可', weights: { huafei: 2, huanbi: 2, anlingrong: 2 } }
    ]
  },
  {
    id: 27,
    dimension: 'social',
    question: '你如何对待背后说坏话的人？',
    options: [
      { text: '当面质问，澄清事实', weights: { huafei: 3, yelanyi: 2, zhenhuan: 2 } },
      { text: '不予理会，清者自清', weights: { shenmeizhuang: 3, jingfei: 3, guojunwang: 2 } },
      { text: '记在心里，找机会反击', weights: { huanghou: 3, duanfei: 2, anlingrong: 2 } }
    ]
  },
  {
    id: 28,
    dimension: 'social',
    question: '你认为人际关系中最重要的是什么？',
    options: [
      { text: '互利共赢', weights: { huanghou: 2, zhenhuan: 2, huanbi: 2 } },
      { text: '真诚相待', weights: { shenmeizhuang: 3, wenshichu: 3, cuijinxi: 3 } },
      { text: '保持距离', weights: { jingfei: 3, duanfei: 2, yelanyi: 2 } }
    ]
  },
  // 应对压力 (29-37题)
  {
    id: 29,
    dimension: 'stress',
    question: '面对巨大的压力，你通常会？',
    options: [
      { text: '积极面对，寻找解决方案', weights: { zhenhuan: 3, duanfei: 3, jingfei: 2 } },
      { text: '独自承受，不愿示弱', weights: { huanghou: 3, yongzheng: 2, huafei: 2 } },
      { text: '寻求他人帮助和支持', weights: { shenmeizhuang: 2, wenshichu: 2, cuijinxi: 2 } }
    ]
  },
  {
    id: 30,
    dimension: 'stress',
    question: '当遭遇重大挫折时，你会？',
    options: [
      { text: '迅速调整，重新出发', weights: { zhenhuan: 3, yelanyi: 2, duanfei: 2 } },
      { text: '陷入低谷，难以自拔', weights: { anlingrong: 3, huanbi: 2, wenshichu: 2 } },
      { text: '默默承受，等待转机', weights: { jingfei: 3, duanfei: 3, shenmeizhuang: 2 } }
    ]
  },
  {
    id: 31,
    dimension: 'stress',
    question: '你更倾向于如何释放压力？',
    options: [
      { text: '运动或娱乐活动', weights: { yelanyi: 2, huafei: 2, guojunwang: 2 } },
      { text: '独处思考', weights: { huanghou: 2, yongzheng: 3, duanfei: 2 } },
      { text: '与朋友倾诉', weights: { shenmeizhuang: 2, cuijinxi: 2, wenshichu: 2 } }
    ]
  },
  {
    id: 32,
    dimension: 'stress',
    question: '面对不确定的未来，你会？',
    options: [
      { text: '积极规划，掌控主动', weights: { zhenhuan: 3, huanghou: 2, yongzheng: 2 } },
      { text: '顺其自然，随遇而安', weights: { jingfei: 3, shenmeizhuang: 2, guojunwang: 2 } },
      { text: '焦虑担忧，难以安心', weights: { anlingrong: 3, huanbi: 2, wenshichu: 2 } }
    ]
  },
  {
    id: 33,
    dimension: 'stress',
    question: '当别人质疑你的能力时，你会？',
    options: [
      { text: '用行动证明自己', weights: { zhenhuan: 3, huafei: 2, yelanyi: 2 } },
      { text: '不在意他人看法', weights: { jingfei: 2, shenmeizhuang: 2, guojunwang: 2 } },
      { text: '内心受伤，自我怀疑', weights: { anlingrong: 3, huanbi: 2, wenshichu: 2 } }
    ]
  },
  {
    id: 34,
    dimension: 'stress',
    question: '在高压环境下工作，你的表现如何？',
    options: [
      { text: '压力越大，表现越好', weights: { zhenhuan: 3, huanghou: 2, yongzheng: 2 } },
      { text: '保持稳定，不受影响', weights: { jingfei: 3, duanfei: 2, cuijinxi: 2 } },
      { text: '容易出错，需要调整', weights: { anlingrong: 2, wenshichu: 2, huanbi: 2 } }
    ]
  },
  {
    id: 35,
    dimension: 'stress',
    question: '面对批评，你通常会？',
    options: [
      { text: '虚心接受，有则改之', weights: { zhenhuan: 2, jingfei: 3, cuijinxi: 2 } },
      { text: '据理力争，维护自己', weights: { huafei: 3, yelanyi: 2, yongzheng: 2 } },
      { text: '内心抵触，表面接受', weights: { huanghou: 2, anlingrong: 2, huanbi: 2 } }
    ]
  },
  {
    id: 36,
    dimension: 'stress',
    question: '当计划被打乱时，你会？',
    options: [
      { text: '迅速调整，制定新计划', weights: { zhenhuan: 3, huanghou: 2, duanfei: 2 } },
      { text: '接受变化，灵活应对', weights: { jingfei: 3, yelanyi: 2, guojunwang: 2 } },
      { text: '感到焦虑，难以适应', weights: { anlingrong: 2, wenshichu: 2, huanbi: 2 } }
    ]
  },
  {
    id: 37,
    dimension: 'stress',
    question: '你认为压力对你是？',
    options: [
      { text: '前进的动力', weights: { zhenhuan: 3, yongzheng: 2, huafei: 2 } },
      { text: '需要管理的负担', weights: { jingfei: 3, duanfei: 2, shenmeizhuang: 2 } },
      { text: '难以承受的重担', weights: { anlingrong: 3, wenshichu: 2, huanbi: 2 } }
    ]
  },
  // 道德底线 (38-48题)
  {
    id: 38,
    dimension: 'moral',
    question: '为了达成目标，你是否愿意牺牲他人利益？',
    options: [
      { text: '在所不惜', weights: { huanghou: 3, yongzheng: 2, anlingrong: 2 } },
      { text: '绝不伤害他人', weights: { shenmeizhuang: 3, guojunwang: 3, wenshichu: 3 } },
      { text: '看情况，尽量减少伤害', weights: { zhenhuan: 2, jingfei: 2, duanfei: 2 } }
    ]
  },
  {
    id: 39,
    dimension: 'moral',
    question: '发现朋友做了不道德的事，你会？',
    options: [
      { text: '坚决制止，甚至断交', weights: { shenmeizhuang: 3, guojunwang: 2, yelanyi: 2 } },
      { text: '视情况而定，可能选择沉默', weights: { zhenhuan: 2, jingfei: 2, duanfei: 2 } },
      { text: '帮助隐瞒或开脱', weights: { anlingrong: 2, huanbi: 2, huanghou: 2 } }
    ]
  },
  {
    id: 40,
    dimension: 'moral',
    question: '你认为"善意的谎言"可以接受吗？',
    options: [
      { text: '可以接受，出发点是好的', weights: { zhenhuan: 2, cuijinxi: 2, jingfei: 2 } },
      { text: '不能接受，诚实最重要', weights: { shenmeizhuang: 3, guojunwang: 2, yelanyi: 2 } },
      { text: '看具体情况', weights: { huanghou: 2, duanfei: 2, wenshichu: 2 } }
    ]
  },
  {
    id: 41,
    dimension: 'moral',
    question: '如果可以不择手段获得成功，你会选择吗？',
    options: [
      { text: '会，结果最重要', weights: { huanghou: 3, yongzheng: 2, anlingrong: 2 } },
      { text: '不会，过程同样重要', weights: { shenmeizhuang: 3, guojunwang: 3, wenshichu: 3 } },
      { text: '看情况，有底线地争取', weights: { zhenhuan: 2, jingfei: 2, duanfei: 2 } }
    ]
  },
  {
    id: 42,
    dimension: 'moral',
    question: '你认为报恩和报仇哪个更重要？',
    options: [
      { text: '报恩，滴水之恩涌泉相报', weights: { shenmeizhuang: 3, wenshichu: 3, cuijinxi: 3 } },
      { text: '报仇，有仇不报非君子', weights: { duanfei: 3, yelanyi: 2, huafei: 2 } },
      { text: '都重要，看具体情况', weights: { zhenhuan: 2, huanghou: 2, jingfei: 2 } }
    ]
  },
  {
    id: 43,
    dimension: 'moral',
    question: '面对不公正的制度，你会？',
    options: [
      { text: '努力改变它', weights: { yelanyi: 3, shenmeizhuang: 2, guojunwang: 2 } },
      { text: '适应并利用它', weights: { huanghou: 2, zhenhuan: 2, anlingrong: 2 } },
      { text: '保持距离，不参与', weights: { jingfei: 3, wenshichu: 2, duanfei: 2 } }
    ]
  },
  {
    id: 44,
    dimension: 'moral',
    question: '你认为人应该为达目的不择手段吗？',
    options: [
      { text: '认同，成王败寇', weights: { huanghou: 3, yongzheng: 2, anlingrong: 2 } },
      { text: '不认同，要有底线', weights: { shenmeizhuang: 3, guojunwang: 3, wenshichu: 3 } },
      { text: '看情况，灵活处理', weights: { zhenhuan: 2, jingfei: 2, duanfei: 2 } }
    ]
  },
  {
    id: 45,
    dimension: 'moral',
    question: '如果背叛朋友可以获得巨大利益，你会？',
    options: [
      { text: '不会，友情无价', weights: { shenmeizhuang: 3, wenshichu: 3, cuijinxi: 3 } },
      { text: '会，利益更重要', weights: { huanghou: 2, anlingrong: 3, huanbi: 2 } },
      { text: '犹豫，但最终不会', weights: { zhenhuan: 2, jingfei: 2, duanfei: 2 } }
    ]
  },
  {
    id: 46,
    dimension: 'moral',
    question: '你认为什么是最大的恶？',
    options: [
      { text: '背叛和欺骗', weights: { shenmeizhuang: 3, wenshichu: 2, guojunwang: 2 } },
      { text: '软弱和无能', weights: { huanghou: 2, yongzheng: 2, huafei: 2 } },
      { text: '伤害无辜', weights: { zhenhuan: 2, jingfei: 2, cuijinxi: 2 } }
    ]
  },
  {
    id: 47,
    dimension: 'moral',
    question: '你认为人应该坚守原则还是灵活变通？',
    options: [
      { text: '坚守原则，宁折不弯', weights: { shenmeizhuang: 3, guojunwang: 3, yelanyi: 2 } },
      { text: '灵活变通，适应环境', weights: { zhenhuan: 2, huanghou: 2, anlingrong: 2 } },
      { text: '有底线地变通', weights: { jingfei: 3, duanfei: 2, cuijinxi: 2 } }
    ]
  },
  {
    id: 48,
    dimension: 'moral',
    question: '如果可以重来，你会选择做一个什么样的人？',
    options: [
      { text: '更有权势的人', weights: { huanghou: 2, yongzheng: 2, huafei: 2 } },
      { text: '更善良真诚的人', weights: { shenmeizhuang: 3, guojunwang: 3, wenshichu: 3 } },
      { text: '更聪明睿智的人', weights: { zhenhuan: 3, jingfei: 2, duanfei: 2 } }
    ]
  }
];

// 维度名称映射
const DIMENSION_NAMES = {
  power: '权力取向',
  emotion: '情感表达',
  social: '人际关系',
  stress: '应对压力',
  moral: '道德底线'
};

// 维度描述映射
const DIMENSION_DESC = {
  power: {
    high: '追求权力，善于掌控',
    mid: '适度争取，懂得权衡',
    low: '淡泊名利，不争不抢'
  },
  emotion: {
    high: '情感热烈，敢爱敢恨',
    mid: '情感适中，理性与感性并重',
    low: '情感内敛，理性主导'
  },
  social: {
    high: '善于社交，人脉广泛',
    mid: '社交适度，重质不重量',
    low: '独来独往，不喜社交'
  },
  stress: {
    high: '抗压能力强，越挫越勇',
    mid: '能应对压力，但需要调节',
    low: '抗压能力弱，容易焦虑'
  },
  moral: {
    high: '道德感强，坚守原则',
    mid: '有底线，但懂得变通',
    low: '实用主义，结果导向'
  }
};

// 导出模块
export { PERSONALITIES, QUESTIONS, DIMENSION_NAMES, DIMENSION_DESC };
