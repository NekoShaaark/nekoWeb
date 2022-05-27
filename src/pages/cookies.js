import Head from 'next/head'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'


{/* variants */}
const h1Variants = {
    hidden: { opacity: 0, x: 0, y: -75 },
    enter: { opacity: 1, x: 0, y: 0 }
}
  
const pVariants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 }
}

const p2Variants = {
    hidden: { opacity: 0, x: -100, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 }
}


const Cookies = () => {
    return( 
        <>
            <Head>
                <title>Neko Web | Cookies</title>
            </Head>

            {/* actual page */}
            <div>
                <motion.h1 className={styles.title} variants={h1Variants} initial="hidden" animate="enter">Cookies</motion.h1>
                <motion.p className={styles.text} variants={pVariants} initial="hidden" animate="enter">Cookies?</motion.p>
                <motion.p className={styles.text} variants={p2Variants} initial="hidden" animate="enter">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem in et optio officiis dolores vel quis. Officia omnis aut cupiditate consequatur sed error, sapiente at facilis, magni expedita optio minus!
                    Iure accusantium distinctio, aliquam esse ex vel inventore, est animi laboriosam voluptatem eaque unde soluta cupiditate doloribus quisquam. Deserunt ullam ea quia aut laboriosam quisquam asperiores nobis molestiae. Voluptates, quia.
                    Nisi, aperiam. Consectetur nesciunt, dignissimos facere fugit quasi obcaecati unde. Quibusdam dolor temporibus doloribus sunt veniam odit, odio sint repellat, commodi similique quis distinctio eius voluptates beatae fugiat voluptatum facilis!
                    Veniam sequi quibusdam tenetur mollitia. Eius, quisquam. Hic error sed, modi cumque aut fugit enim quo illum quae animi officiis atque quod ad libero quia aliquid! Voluptas obcaecati sint repellendus!
                    Accusantium sit maiores corporis assumenda beatae, cumque in eum quaerat temporibus voluptate sint at soluta magnam eos sed est cupiditate esse eligendi accusamus. Nobis placeat quia vero illum, doloremque maiores.
                    Provident culpa earum labore alias dolorem quibusdam officia nam nemo repellendus id obcaecati magni iste ea, a consequuntur ratione aliquid, laudantium repellat debitis eos maiores. Quae quam neque quisquam officiis?
                    Nihil molestiae maxime nulla, fugit, delectus quaerat consectetur voluptas nemo officiis aperiam quod unde, explicabo consequuntur ullam ducimus a. Illum, vel atque! Aperiam assumenda maiores ab, numquam voluptatem minima id.
                    Atque minima voluptate libero expedita ipsum deleniti. Doloribus iusto sequi nulla perferendis inventore consequuntur suscipit totam, similique nesciunt molestiae quia doloremque ex veniam, ea repellat maxime saepe eius vel tempore.
                    Vero quasi quaerat minus sit quidem sapiente dolorem harum atque corporis nisi maiores voluptatum inventore, architecto iusto esse. Impedit repellat magni repudiandae, non laudantium quo consequuntur molestias omnis temporibus delectus!
                    Molestiae, reprehenderit eligendi? Numquam doloribus nobis deserunt, provident ipsa voluptates reiciendis deleniti eius optio. Dolor inventore quaerat explicabo sequi nobis distinctio sapiente nam, excepturi rerum debitis! Id earum quasi rem.
                    Doloremque ullam sint, nostrum quidem nobis maxime distinctio a asperiores quis! Rerum corrupti provident ipsum ducimus excepturi porro fugit officia. Odio laboriosam suscipit dolore nesciunt dolorum ducimus vero, eius magni.
                    Nemo, necessitatibus unde consectetur consequatur ab praesentium nesciunt odit at distinctio provident sint labore atque enim, eligendi debitis minima animi voluptate vel et esse repellat, quaerat itaque magni! Temporibus, animi.
                    Veniam quo quos voluptatum reiciendis consequuntur aliquam, ut amet, error ipsa possimus ipsam aut repellendus accusamus dolorum sint assumenda necessitatibus eveniet molestias provident ab ullam accusantium! Nobis harum dolore qui!
                    Explicabo accusamus totam qui harum eum dolores maiores perspiciatis quisquam quis quae sapiente impedit voluptatem eligendi adipisci quasi, tempore veniam fuga sit expedita labore repudiandae rem. Beatae dicta nobis illo.
                    Ipsam optio, commodi tempore facere odio atque amet iusto itaque cum ex numquam ea sequi quasi eos voluptatibus assumenda obcaecati voluptas molestiae sit, voluptate eius cumque perspiciatis, quis nihil. Dolores!
                    Ab doloremque aspernatur optio porro deserunt beatae dolore sapiente officia, eius accusantium fuga, repellat nulla quia magni neque amet, ullam temporibus minus veniam saepe est tenetur incidunt reprehenderit? Aut, expedita.
                    Id nulla, pariatur hic ducimus, magni repellendus molestias laborum dicta ipsa sequi error esse nihil nesciunt maiores veniam repudiandae nisi quia quae saepe vitae architecto accusantium dolorem odit alias? Iure.
                    Soluta, quae magni! Adipisci labore ex eligendi voluptatum. Aperiam odit modi adipisci est vel, ut necessitatibus eius eos inventore! Officia ipsum veniam doloremque atque culpa blanditiis commodi harum sint neque.
                    Cupiditate hic fugiat veritatis voluptas ipsam? Cumque explicabo quaerat est, fugiat ut aspernatur iusto quia quibusdam incidunt. Distinctio, beatae? Nesciunt sapiente quia obcaecati vel sequi molestiae deserunt quibusdam maxime excepturi.
                    Adipisci quis voluptatum officiis quos nihil repellendus atque iure suscipit nisi neque! Suscipit consequatur optio voluptatibus dolorem. Ratione error optio, nulla odio ipsam, vero minima totam possimus tempore sunt provident.
                    Ipsum, quibusdam quia iusto obcaecati saepe illo asperiores doloribus nisi mollitia voluptatibus voluptates nulla non, debitis cum veritatis reiciendis soluta maxime? Rem nobis in voluptate facere animi praesentium quia qui.
                    Molestias quibusdam eius, voluptas ex id, vitae, nemo neque consequuntur sunt fugiat consequatur et perferendis quo temporibus pariatur maiores. Hic, ut. Quas, fugiat? Cupiditate officiis, placeat aliquid ipsum sapiente laudantium.
                    Eius mollitia in possimus non illum obcaecati nostrum quis nisi quos omnis, illo asperiores esse cupiditate sit, debitis dolorem aliquid dicta deleniti corrupti quisquam, odit a. Reiciendis dolorum eum repudiandae!
                    Dignissimos labore incidunt exercitationem itaque placeat quas magnam error iste, dolor deleniti quod odio reprehenderit repellat dolorem vel nisi a? Dolor dolorum autem non temporibus quisquam corrupti ea quos sequi.
                    Iure dolore sit nemo qui dicta autem, facilis ab delectus aperiam aliquid similique dolores fuga veritatis quis culpa illo esse asperiores. Possimus placeat aut labore, nulla cum libero autem quia.
                    Distinctio illum molestias, ut id ullam natus similique veniam. Exercitationem ab ut dolor, accusantium debitis unde, iusto, sit totam assumenda beatae voluptas molestias corporis? Iste dolor sunt praesentium necessitatibus similique!
                    Nam sint sapiente labore atque iusto magni perferendis maiores quas reiciendis dolorum sequi dolore quod, possimus inventore rerum quidem doloribus exercitationem, quasi facere nisi at facilis suscipit voluptatem. Fugit, rem.
                    Odit illo, minus suscipit iusto repellat quasi, eum dignissimos consequuntur id est consequatur iste odio deleniti qui voluptatem, amet at ea! Consequuntur quam pariatur praesentium mollitia sunt dignissimos nemo perferendis.
                    Nam laudantium ipsam perspiciatis ipsum hic? Facilis facere saepe tempora odio deleniti, quae cum eveniet, eos autem aspernatur, fuga voluptatem voluptatum voluptate minus expedita quidem consequuntur. Provident id accusantium illo.
                    Atque iure at numquam molestias expedita magni, laboriosam blanditiis ipsum debitis porro accusantium neque, iste aspernatur corporis odio hic dolore magnam aut animi minus eaque obcaecati perferendis? Nemo, assumenda distinctio.
                    Ducimus exercitationem magni dolorem aspernatur quae officia minima qui, accusantium temporibus, quaerat, unde incidunt optio pariatur voluptatem consequatur dignissimos aliquid necessitatibus. Velit laudantium dolores vero magnam mollitia repellat iure atque.
                    Repudiandae quibusdam ullam ab sequi beatae consequuntur, minus earum delectus ducimus quam cumque alias neque, voluptate laudantium ipsum aut temporibus dignissimos nesciunt! Facere ullam facilis natus atque? Nobis, ea omnis.
                    Fugiat quo reiciendis voluptatum sit non aspernatur tempora possimus. Culpa magni dignissimos minus amet quia voluptas minima harum officiis aliquam voluptates quos consequuntur iusto maiores rerum, laborum molestias alias cumque.
                    Consectetur vitae iure optio dolor officiis, voluptate dicta veniam saepe? Quisquam aliquam tenetur, fuga suscipit vero aspernatur? Iure, praesentium assumenda sequi deserunt mollitia magnam veritatis soluta quod neque quo nihil.
                    Vitae architecto necessitatibus explicabo dolorum aspernatur culpa quidem tempora quos nam, possimus neque minima dolorem, autem voluptas molestiae harum libero dolores exercitationem corrupti nemo eaque fugit, sapiente nostrum. Officia, modi.
                    Quo impedit necessitatibus atque voluptatum saepe, expedita beatae esse voluptas doloribus id fuga libero quaerat aperiam laborum soluta? Qui rerum quae sed assumenda impedit cupiditate error esse modi repudiandae inventore!
                    Fugiat, eos et est culpa aut quod voluptatibus quia esse aspernatur officia blanditiis nesciunt laudantium soluta sequi aliquid? Odio temporibus qui sed. In, tempore illo non accusantium dicta cumque nulla?
                    Voluptatibus perspiciatis repellat sint. Veritatis quo, illum corrupti fuga dolores totam inventore culpa rem quaerat aspernatur, quos ab reiciendis illo ex! Officia voluptatem harum doloremque saepe accusamus, ea cum numquam!
                    Facere nostrum similique dicta, illo magnam rerum ipsa soluta ab ipsum, vitae molestias commodi repellendus. Sit doloremque dicta, voluptates nemo modi quaerat sapiente doloribus animi eius nostrum fuga ipsum inventore.
                    Eum, sunt? Perferendis qui quod ducimus ipsam laborum exercitationem expedita. Officia facilis deleniti aperiam non voluptatibus! Obcaecati nesciunt, deleniti repudiandae vel assumenda nulla, cupiditate quis, delectus asperiores vero quisquam alias?
                    At, nemo magni! Laudantium possimus neque eum cupiditate aliquid repudiandae fuga libero explicabo nostrum atque sunt quae recusandae, corrupti nihil impedit saepe unde veniam ad perspiciatis. Laboriosam aut rem modi!
                    Tenetur temporibus dolor provident facere iste, nobis ratione dicta numquam recusandae, enim odit ipsa? Quidem culpa error expedita quo omnis at maxime, suscipit quis fuga, officia dolore excepturi! Numquam, officiis.
                    Atque doloremque obcaecati pariatur quam in iure eius quo sequi minima soluta hic, accusantium excepturi, qui nulla facilis quidem omnis reprehenderit dicta voluptates perspiciatis impedit? Iusto tempore labore omnis culpa?
                    Sint fuga in nostrum? Qui similique quas, ducimus magni minima omnis voluptatibus illo sed ab ipsa mollitia amet quibusdam esse distinctio, voluptas aut quos sint ratione dolorem commodi aliquid odio!
                    Assumenda accusamus tempore fuga voluptas esse praesentium! Reprehenderit voluptatem, beatae culpa illum ex, deleniti numquam aspernatur consequuntur optio quam esse accusantium facilis repellat rem harum nulla possimus minus velit impedit!
                    Quis eius minima animi veritatis deleniti mollitia error. Iusto sed numquam possimus nostrum voluptates architecto et illo, nesciunt dolore nulla, sint error debitis aliquid, doloremque maxime perferendis. Eaque, distinctio optio!
                    Voluptates minima commodi eius sapiente quis adipisci reiciendis consequatur harum, asperiores dolore est aliquam cum cupiditate dolorum sunt rerum, corrupti molestiae in fugiat laboriosam minus! Molestiae eligendi magni error culpa.
                    Magni modi eum ut totam exercitationem voluptatum quibusdam sapiente vitae, numquam sequi. Sint cumque totam dolores, enim doloribus possimus, cupiditate exercitationem laboriosam aut doloremque natus laborum omnis assumenda architecto ab.
                    Officiis, placeat, perspiciatis doloremque a nam sint necessitatibus sapiente minima assumenda similique provident laboriosam quasi. Amet sunt nesciunt harum explicabo libero, doloribus excepturi officiis tenetur doloremque alias ullam, consectetur quisquam?
                    Sequi sunt quasi aut fuga. Fugiat soluta pariatur, exercitationem quibusdam harum illum tenetur velit error vel iure deserunt voluptates nulla, nesciunt unde totam nam magni. Suscipit minus alias numquam nam.
                    Aut ullam voluptatibus earum soluta fugit veritatis aspernatur? Corrupti sequi, alias, ducimus, nihil accusantium unde id sint quia exercitationem temporibus quidem nisi officia. Velit laborum dolores assumenda eveniet cupiditate nam.
                    Labore illo quis omnis autem aut itaque cupiditate odio porro, ab officiis blanditiis perferendis iusto veniam fugit tempore doloremque quaerat sint error alias nulla aliquid voluptatum! Molestiae repudiandae minima rem!
                    Nostrum doloribus, magni eveniet, veritatis doloremque at obcaecati perspiciatis corporis sunt aliquam commodi sed explicabo nisi vitae dolores suscipit iure, molestiae culpa quaerat dolorem nesciunt repudiandae velit? Optio, doloremque repudiandae?
                    Fugit distinctio ipsam porro esse tenetur voluptas, facilis asperiores quia quam nobis. Corrupti ab hic expedita? Eaque, commodi optio praesentium iusto velit distinctio sunt! Beatae natus perspiciatis dolor consequuntur at!
                    Ullam exercitationem libero qui modi temporibus saepe numquam, officia aut earum error nobis adipisci dolorum ad dolorem aliquid assumenda tempore. Ab, perferendis culpa quam voluptas ut quae suscipit amet provident?
                    Saepe ipsam impedit tenetur. A impedit earum dolorem labore vel dolor eius nesciunt debitis consectetur rem ipsa reprehenderit magni iusto quos quo, modi, ipsum voluptatum ab! Nobis quia recusandae in.
                    Obcaecati, minus deleniti eligendi velit sequi vitae corporis voluptatum aspernatur necessitatibus, in aliquid nulla possimus debitis dolores sint optio quibusdam? Laborum, ab! Omnis voluptatum praesentium veritatis est dicta fugit ratione.
                    Distinctio voluptatibus at nesciunt praesentium neque doloribus aliquam ratione rerum, illum accusantium eius officia consectetur corrupti maxime animi molestiae illo eligendi ab autem quasi velit? Temporibus dolorem beatae minima cumque.
                    Molestias voluptatum blanditiis aut, nemo et, nam labore animi nostrum sit eveniet quod. Assumenda fugiat sequi ipsum minima, reiciendis nisi recusandae pariatur sunt facere dolor amet ipsa velit aut dolorem?
                    Vero, atque impedit nobis vel quasi ipsum, dolorum quae accusantium quam earum quo. Similique, totam, quam mollitia voluptatum, blanditiis sunt saepe repudiandae suscipit reprehenderit quaerat ullam perferendis nam earum cumque.
                    Exercitationem impedit magni natus? Veritatis nam dignissimos eos dolore optio omnis reprehenderit, accusantium eaque vero at sit doloribus totam illum voluptatem assumenda placeat voluptatibus tempore nobis labore quas corporis similique.
                    Et excepturi magnam at recusandae ipsam ipsum ullam? Asperiores vitae aliquid ut, quasi harum minus itaque? Odit fugit quibusdam aperiam totam assumenda, rem fuga adipisci ducimus possimus minus iste repudiandae?
                    Harum, velit. Eius laudantium illo optio cupiditate cumque hic quisquam assumenda doloremque nam provident voluptates ratione, laborum sequi sed veniam eveniet neque magni natus, non earum perspiciatis! Necessitatibus, sapiente rerum!
                    Eligendi labore doloremque corrupti in numquam, adipisci aliquid, laborum quaerat autem maiores nulla distinctio, nihil magnam repellat est repellendus officiis cupiditate excepturi dignissimos odit ad molestias quae delectus. Pariatur, quod!
                    Fuga, quidem. Maxime ipsam dolorum, ratione perferendis molestias delectus suscipit eum dolor ab fuga iure atque numquam iusto, esse eius! Magnam sed numquam voluptas ab, a ipsa officiis rem illum?
                    Quisquam temporibus libero explicabo ut non qui nobis ex repudiandae architecto, numquam quibusdam? Iste, quo. Est laborum quo, culpa facere optio inventore quam adipisci esse voluptas, consequuntur eveniet? Rerum, facilis.
                    Facilis eaque id porro adipisci ipsum harum veniam, beatae et numquam sunt. Qui facilis laudantium, suscipit ex, sapiente blanditiis excepturi ea nulla numquam nostrum porro commodi delectus dolores, ut ad!
                    Sed ut, veritatis molestias quibusdam tenetur rerum delectus possimus magni nemo inventore laborum, nulla dolore corrupti eveniet dignissimos quis sapiente dolorem atque ea, ducimus fuga aliquam enim debitis magnam! Mollitia.
                    Iure, officia tenetur. At consectetur sed aspernatur, ipsam molestias optio maxime neque culpa rem ad. Veritatis, ab quaerat! Magni nesciunt quod temporibus possimus enim voluptate, necessitatibus dicta non sequi fugit.
                    A, voluptatum! Esse, id libero. Accusamus dolor possimus quas, blanditiis provident neque velit officia libero! Expedita blanditiis quas aspernatur quidem, porro omnis, impedit harum officiis, vero repudiandae eligendi laudantium quibusdam.
                    Esse, dolorum sit amet nobis natus laborum eius explicabo facere quaerat minus deleniti ipsa asperiores ullam eaque possimus debitis id! Esse hic cupiditate voluptatibus tempore, rerum excepturi quod enim odio?
                    Quos dolorem doloribus inventore saepe optio natus eligendi reprehenderit velit. Non veniam odio maiores ex temporibus, sunt ad. Dolorem, excepturi itaque voluptates velit amet beatae quis eaque eligendi praesentium veritatis.
                    Voluptatum suscipit illo laboriosam ea quibusdam, temporibus soluta, dolorum quasi praesentium totam quos unde vitae voluptates cum et doloribus pariatur fugiat, repellendus fuga voluptatem nemo exercitationem explicabo hic! Iusto, minima!
                    Eius ex, commodi fuga doloribus soluta sapiente suscipit! Impedit, ducimus ipsam veniam voluptate fugiat voluptatibus sit neque blanditiis quia! Odit, sapiente. Voluptatibus incidunt id quod vero, quos repudiandae culpa laborum?
                    Laboriosam minus ea beatae eveniet consequatur possimus, fugiat aspernatur? Natus dolorem itaque adipisci magni minus nostrum, sint inventore ipsam repellat ab accusamus! Facilis ducimus deserunt eius commodi in iste perspiciatis?
                    Asperiores repellat neque libero labore ex pariatur praesentium aliquid quas. Corrupti dolor optio natus dolores totam ex delectus, ullam ipsam, aliquam, quasi labore. Modi, nulla consequuntur distinctio repudiandae repellendus error.
                    Eum beatae repellat earum? Corporis doloremque, hic earum a inventore consequatur ipsam. Magni vero porro eius rerum autem vitae. Quod neque, asperiores quibusdam enim iste dicta dolorem culpa corrupti error?
                    Omnis atque quod dolorum repellat debitis perspiciatis. Laboriosam quod, minima commodi qui libero, omnis quam tempore, similique laudantium adipisci expedita voluptatibus quis eius aspernatur. Reiciendis veniam tempora optio labore quod.
                    Atque dolorem aperiam consectetur. Et cum adipisci illum obcaecati quo magni, incidunt dolores est inventore, quas eligendi tempora delectus maxime accusantium veniam. Ducimus a ab voluptatum numquam quae corporis vitae!
                    Eaque cum alias a distinctio quos eos dolorem perferendis quisquam? Architecto nam, quisquam saepe tenetur sit reprehenderit, fugit ab id sed deserunt eveniet officia molestias nihil totam? Expedita, reprehenderit provident.
                    Commodi a nobis ad, modi sunt distinctio omnis dicta libero magnam, adipisci repellendus voluptatem quam reprehenderit consequatur consequuntur quibusdam dolore. Culpa distinctio architecto repellendus ad nam. Adipisci asperiores eum ad?
                    Delectus quisquam ab quod quos, nesciunt vitae nostrum, ipsam ullam fugit omnis nisi repellendus placeat, debitis ipsum. Error eveniet modi aperiam quaerat reiciendis, ab odit ratione sed adipisci suscipit numquam!
                    Rerum tenetur molestiae nobis cupiditate. Obcaecati ipsa saepe nesciunt? Fugiat voluptates doloremque, non assumenda eum commodi! Dolor repudiandae magni adipisci dolore, impedit libero ad ipsum quos numquam iure nostrum minus!
                    Laborum, dolores provident necessitatibus qui deserunt alias quos sit vitae tempora voluptates id maiores debitis atque mollitia consectetur illum laboriosam harum nemo veritatis corrupti nam non? Laboriosam aut magnam fuga.
                    Omnis expedita commodi architecto voluptatem nisi, quibusdam blanditiis dolore atque incidunt eius nam suscipit natus possimus reprehenderit amet molestiae debitis et inventore sed quis. Odit quia nam vel sapiente quibusdam?
                    Atque eius dolore amet laudantium consequatur, minus optio nobis voluptates culpa libero commodi quas repellendus! Laborum asperiores assumenda et voluptate animi eligendi necessitatibus? Dignissimos omnis laboriosam, debitis ipsam doloribus quibusdam.
                    Iste quidem facere quasi cupiditate accusantium libero ex dolor reprehenderit deserunt obcaecati voluptates non praesentium necessitatibus odio quaerat, delectus nobis sunt aperiam fuga architecto provident quam saepe neque. Corrupti, officiis.
                    Esse magnam nam, nobis id dicta alias debitis repellendus quasi expedita necessitatibus praesentium! Amet, sit non sint quas quod libero earum voluptate iste totam voluptatibus quos excepturi saepe explicabo porro.
                    Tenetur corporis maiores voluptates corrupti maxime tempore veniam necessitatibus. Sit unde ipsa maiores non esse inventore! Dignissimos, temporibus rem! Velit iusto et quaerat ab autem eveniet praesentium distinctio mollitia nulla!
                    Ea ut veniam magnam dicta minima nobis laudantium voluptate, sit, dolores rem perspiciatis quis laboriosam accusantium consequuntur magni illo officiis eaque, consequatur ipsam. Nesciunt, enim? Corporis nemo asperiores maiores iure?
                    Saepe nihil dolorem repellendus molestiae? Laudantium, obcaecati voluptatum magnam pariatur, deleniti suscipit excepturi aliquam, ducimus aspernatur eum expedita provident? Quae, sapiente delectus. Excepturi illum aliquid delectus voluptatum dicta omnis aspernatur.
                    Reprehenderit, incidunt reiciendis error velit asperiores delectus eaque recusandae eos quam at dolore perspiciatis hic neque ab nisi voluptatum? Sapiente velit dolore omnis, explicabo vero sed quam vel non unde.
                    Obcaecati pariatur dignissimos exercitationem. Temporibus nisi, veniam quam quod possimus libero error cumque perspiciatis voluptatibus deleniti expedita inventore facilis deserunt natus accusamus dolorem. Natus dolorum architecto ea officiis deserunt est!
                    Soluta commodi alias accusamus iste voluptate, vero maiores autem deserunt assumenda, tempore numquam atque odio qui. Voluptates eligendi ea quidem sed eaque soluta, ullam voluptatibus commodi vitae nulla consequatur. Inventore!
                    Vel nemo natus rerum, odio molestias, eum consequuntur nulla dicta reiciendis architecto ipsam veritatis nobis recusandae quaerat voluptatem officiis ipsum temporibus, assumenda obcaecati. Facere obcaecati, harum eius consectetur aperiam eaque!
                    Accusamus amet repellendus delectus. Aut voluptatum praesentium tempora dolorem fugiat ducimus dicta, id explicabo minus, saepe labore accusantium incidunt. Ipsa dicta harum ipsum dolor soluta eum fugiat sapiente aliquam impedit.
                    Soluta nisi quasi quam dolorum dolore, molestias sunt! Beatae hic consequatur nam. Aspernatur quibusdam illo ex qui minus similique, suscipit quia, nisi architecto, facilis laudantium autem perferendis vero inventore esse.
                    Sint debitis, reprehenderit atque modi eius adipisci officiis, amet praesentium corrupti iusto libero quidem? Magni reprehenderit fuga autem ipsum rem provident, mollitia facilis similique magnam, dolor sint voluptas aliquam cupiditate.
                    Et vitae tempore fugiat expedita repellendus quae ducimus. Illum sunt fugit ipsum ipsam sapiente. Molestiae explicabo vitae neque libero quidem aspernatur ducimus corporis facere, doloribus ad odio blanditiis temporibus iure.
                    Sit optio, iste deserunt similique neque iusto ducimus sunt, ab consequatur voluptas est modi atque unde sequi. Tenetur pariatur debitis odit iure nesciunt odio architecto porro. Placeat, maxime numquam. Id.
                </motion.p>
            </div>
        </>
     );
}


export default Cookies;