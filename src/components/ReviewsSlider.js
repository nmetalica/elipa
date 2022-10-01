import React from 'react'
import ReviewCard from './ReviewCard'
import {useRef, useEffect} from 'react';
import { withTranslation } from 'react-i18next';

const reviews = [
  {
    name: 'Bruno',
    text: 'Doutora muito simpática e prática. Tratamentos sem dor. Muito profissional. Valores justos. Qualidade excelente.'
  },
  {
    name: 'Paula Oliveira',
    text: 'Tinha muito medo de ir ao dentista, já algum tempo que não ia a nenhum, apareceu-me no Instagram a Dra Elizabeth Pean, abri e não sei explicar bem mas algo me transmitiu confiança. Fiz marcação com a Dra e na primeira consulta fiquei rendida à sua simpatia e à maneira como me explicou tudo. Hoje fui à consulta de início de tratamentos, correu super bem, teve sempre a preocupação de perguntar se estava bem. Saí do consultório com a sensação de ao fim de tantos anos encontrei a melhor Dra e no mínimo de 6 em 6 meses irei marcar sem medos e receios. Aconselho a conhecerem a Dra Elizabeth Pean ela é fantástica!'
  },
  {
    name: 'Kelvin',
    text: 'Super recomendo! Muito atenciosa e ecplicativa recuperou meu sorriso fiquei muito feliz e grato pelo trabalho!!'
  },
  {
    name: 'Cláudia',
    text: 'Profissionalismo, dedicação, e simpatia são palavras que definem a Dra. Elízabeth. Cuida dos seus pacientes de forma exemplar, sempre com muita dedicação e preocupação constante dentro e fora do consultório. Preza por personalizar cada tratamento sendo sempre o mais natural possível. Já fiz alguns procedimentos com a Dra. Elízabeth e é sem dúvida "La Mejor"!'
  },
  {
    name: 'Telma Pereira',
    text: 'A Dra Elizabeth é a melhor dentista que conheço em 30 anos de vida! Muito atenciosa, muito simpática, e extremamente profissional! Em todas as suas consultas sai a sorrir ainda mais e melhor do que entrei! Aconselho a todos os meus amigos! Recomendo a qualidade, e quando vale a pena, mais ainda recomendo a dentista Dra Elizabeth!'
  },
  {
    name: 'Jaqueline',
    text: 'Ser humano fantatisco que ama a profissão. Odontologia para ela significa amor. Ela é perfeita e em tudo que faz e esta sempre se aperfeiçoando e buscando novos conhecimento para nos dar o seu melhor. Faço tratamento dentario e fiz botox com ela e estou muito satisfeita... me devolveu a auto estima e o sorriso. PARABENS DRA. SUCESSO!!!'
  },
  {
    name: 'Liset',
    text: 'Tinha medo de colocar botox no meu rostro mas com a doutora Elisabeth todo é muito simples!! Ela consegue fazer magia. Fiquei feliz! Um ótimo resultado e muito natural!'
  },
  {
    name: 'Mónica',
    text: 'A melhor dentista de Lisboa! Muito atenta aos detalhes, atenciosa, querida e simpática! Recomendo a todos!!'
  },
  {
    name: 'José Pereira',
    text: 'Nos últimos 30 anos, na minha experiência como paciente em Medicina Dentária, jamais tive a oportunidade de encontrar uma profissional tão eficaz, atenciosa e experiente, recomendo sem dúvida alguma! Muito obrigado Dra. Elízabeth P. Anta'
  },
  {
    name: 'Irina Levina',
    text: 'Eu estava com bastante medo de tratar os meus dentes, mas a Dra.Elizabeth é a primeira dentista que trata os meus dentes sem eu perceber, não senti nenhum desconforto! Dra. Elizabeth é muito calma, gentil, educada, muito doce. Atenta a cada detalhe, a cada pormenor! Há muito tempo que procuro mãos confiáveis! Obrigada!'
  },
  {
    name: 'Luisa Peralta',
    text: 'Cuando aunas en una persona, pasión, entrega, dedicacion por su trabajo, con una profesionalidad, calidad y buen hacer que queda patente continuamente en sus trabajos y en la satisfacción de los pacientes. El resultado es ella. Y además de empática..es un encanto. Máxima tranquilidad y confianza en sus manos. Mi familia y yo encantados con ella.'
  },
  {
    name: 'Ángel GarLa',
    text: 'Lo recomendaría 100%, gran profesional, atenta, empática, puntual, y sobretodo da una máxima confianza. Un punto a favor para los españoles, es tener tu clínica de toda la vida en tierras lusas. Un placer!'
  },
  {
    name: 'Fabiana Santos',
    text: 'Super recomendo a Dra Elizabeth, uma ótima profissional, muito simpática, doce e atenciosa com cada detalhes, se preocupa com a saúde bucal do paciente também fora do consultório.'
  },
  {
    name: 'Dobrin Valentina',
    text: 'Melhor Doctora que conhece aqui em Portugal .Sempre muito simpática , explica tudo para perceber. Sem dor, estou muito muito feliz que finalmente encontrei alguém como eu queria. Obrigada.'
  },
  {
    name: 'Gabriela',
    text: 'A Doutora Elízabeth és maravilhosa. Fiz um branqueamento dentário e o resultado foi espetacular. Adorei. Ainda vamos continuar a trabalhar com a doutora noutros tratamentos. Doutora linda, atenciosa e muito agradável. 100% recomendada.'
  },
  {
    name: 'Thiago de Lemos',
    text: 'Sem dúvida algumas pessoas nasceram para a área da saúde , Dra Elizabeth è uma delas. Super dedicada , explica cada procedimento, muito professional extremadamente simpática e tudo que faz è com empenho. As vezes que fui não poderia ter saído mais satisfeito. E está na hora de eu voltar à sua cadeira. Aconselho sem reservas.'
  },
  {
    name: 'Nareth Morais',
    text: 'Vi o trabalho da Dra. Elízabeth P. Anta através da sua página do instragram, e disse é isso que eu quero para mim. Não desiludiu, na realidade subiu a fasquia.. Excelente profissional, atendimento minucioso, de total atenção ao paciente, muito humana e dedicada. Tem o cuidado de explicar os tratamentos,sinto-me segura e satisfeita. 100% recomendável. Obrigada Dra Elízabeth!'
  },
  {
    name: 'Andra Toth',
    text: 'Das melhores profissionais que encontrei na minha vida tanto eu como os meus pais somos pacientes da Dr.Elizabeth , tanto na parte da estética dos dentes como todos os outros procedimentos dos dentes tem uma mão muito suave que nem sente se quando trabalha ou mexe nos dentes, nas cáries etc. Não imagino como seria a minha vida sem a Dra.Elizabeth tratar dos meus dentes e todos os outros procedimentos ligados a estomatologia. Parabéns sempre de 5 estrelas o atendimento e a pontualidade. Obrigada!'
  },
  {
    name: 'Rui Pereira',
    text: 'A Dra Elizabeth é uma excelente profissional, que alia os conhecimentos técnicos a uma grande dedicação e preocupação com os pacientes. Acrescido do facto de ser meticulosa nos trabalhos realizados, procurando sempre a perfeição. Sem dúvida uma profissional de eleição.'
  },
  {
    name: 'Raul Alvarez',
    text: 'Excelente profesional, muy competente en su trabajo. Soy su paciente y la verdad es que ha hecho un fantástico trabajo conmigo. Se las recomiendo'
  },
  {
    name: 'Nuno Rodrigues',
    text: 'Tanto eu como a minha esposa e filha somos pacientes da Dra Elisabeth. Uma Dentista 5 estrelas, sabe muito bem o que faz, cuidadosa, explica tudo. Com a minha filha que é seguida desde os 5 aninhos, não posso estar mais contente, e a KiKa adora ir ao dentista.'
  },
  {
    name: 'Liliana Paulino',
    text: 'A Dra .Elizabeth Pérez para além de ser uma excelente profissional e muito metódica e perfeccionista na sua área , é um ser humano maravilhoso . Uma médica muito simpática e atenciosa para com os seus pacientes.'
  },
  {
    name: 'Carlos Francisco',
    text: 'Muito simpática e atenciosa. Muito Boa profissional. Dá anestesias sem dor. Fez três implantes que ficaram muito bem.'
  },
  {
    name: 'Fábia Romeiras Araújo',
    text: 'Excelente profissional que ama o que faz! Não podia estar em melhores mãos, os meus dentes estão a ficar lindos,estou a meio do meu tratamento invisalign, recomendo! Obrigada Dra Elizabeth por estar sempre disponível para qualquer dúvida.'
  },
  {
    name: 'MMC',
    text: 'Trato cercano y muy profesional. Muy perfeccionista y eficaz. Sin dolor, me ha quitado mi miedo al dentista!'
  },
  {
    name: 'Joana Cavalleri',
    text: 'Melhor dentista que conheço! Muito satisfeita com os resultados obtidos nos tratamento que a Dra Elízabeth fez nos meus dentes. Também acompanha o crescimento da dentição do meu filho. Estamos muito satisfeitos!!! Recomendação máxima'
  },
  {
    name: 'Aliny Oliveira',
    text: 'Sem dúvidas que é a melhor dentista que já conheci!! É uma excelente profissional, simpática e muitíssimo atenciosa. Impossível não sair satisfeita com a sua consulta!'
  },
  {
    name: 'Juana',
    text: 'Excelente profesional, muy atenta a los pequeños detalles..no hay nadie mejor en la estética dentaria.'
  },
  {
    name: 'Márcia Silva',
    text: 'O que recebi não foi um serviço, foi um milagre. Superou em tudo as minhas expectativas. Grande profissionalismo e rigor. Confiança total no dom da Dra. Elizabeth.'
  },
  {
    name: 'Jaime Farto',
    text: 'El cuidado y la delicadeza de la Doctora hizo que ya no me costase dolor ir al dentista. Gracias a ella mi sonrisa es mas bonita.'
  },
  {
    name: 'Rita Ribeiro',
    text: 'É a dentista da nossa família! Uma medica 5 estrelas.Com as crianças um doce! Profissional de mão cheia.'
  },
  {
    name: 'Valeria',
    text: 'Como os meus dentes eram bonitos, que ilusão. Sinto que os folheados podem mudar completamente a sua vida, a sua auto-confiança. Existem milhões de dentistas no mundo, mas ela é especial. Obrigado, 100% recomendável.'
  },
  {
    name: 'Beatriz Calado',
    text: 'Ótima profissional e deixou-me com uma boca linda. Adorei o trabalho que fez e esteve sempre com muita paciência comigo'
  },
  {
    name: 'E.F',
    text: 'É muito profissional, simpática e atenciosa para sempre. Ela resolveu meu problema da melhor maneira possível! Agora eu adoro meu sorriso.'
  },
  {
    name: 'Ana Catarina Sena',
    text: 'Depois de diversas experiências negativas . A Dra Elisabeth foi a minha salvação!! Posso dizer que não existe pessoa mais atenciosa, com amor ao seu trabalho e faz uns trabalhos maravilhosos como ninguém!'
  },
  {
    name: 'Sonia',
    text: 'Excelente profesional y trato inmejorable. Fui a su consulta por recomendación de un amigo, explica todo de forma muy clara. Ha sido muy importante para mí conseguir por fin un dentista de confianza, su empatía conmigo fue admirable! Muy agradecida estoy feliz con el resultado!'
  },
  {
    name: 'Inês Dias',
    text: 'Excelente trabalho e dedicação! Dra muito atenciosa. O trabalho foi efetuado num espaço de tempo curto de acordo com as minhas expectativas.'
  },
  {
    name: 'Edmilson Inocencio',
    text: 'Uma excelente profissional, muito atenciosa nos detalhes para deixar o sorriso perfeito, muito simpática, recomendo a 200%. Total confiança.'
  },
  {
    name: 'Breisy',
    text: 'Me trato con ella hace muchos años y ya no puedo cambiar de dentista. Prefiero viajar a ser tratada por ella a cambiar de doctor. Es una profesional excelente, cuidadosa y atenta a todos los detalles, con una estética impecable. La recomiendo totalmente!'
  },
  {
    name: 'LucíaM',
    text: 'Excelente Profesional!! Llevo años tratándome con ella, y la delicadeza y el amor que le pone a cada trabajo es insuperable.. tiene unas manos de oro. Recomendable 100%.'
  },
  {
    name: 'David',
    text: 'Super satisfeito com o resultado final, exactamente o que que eu pedi. Excelente profissional recomendo a 100%. Muito obrigado.'
  },
  {
    name: 'Emilio García',
    text: 'Ela é minha médica há mais de 10 anos e só autorizo ser tratada por ela, uma profissional incrível e sempre com os melhores resultados.'
  },
  {
    name: 'Joana R.',
    text: 'A Dra. Elizabeth é uma profissional de excelência. Muito cuidadosa e com atenção ao detalhe, deixa qualquer paciente totalmente à vontade. Faz um trabalho perfeito e está sempre disposta a receber feedback construtivo (embora onde trabalho seja exímio), o que mostra humildade e empatia. Recomendo a 100% os seus serviços.'
  },
  {
    name: 'Sandra Comesaña',
    text: 'La Doctora nos atendió en España a mí y a mi marido. Sólo podemos decir que es maravillosa!! Es super delicada con todos los tratamientos y te lo explica detalladamente. Además es super simpática! sin duda volvería a Portugal a realizarme otro tratamiento con ella si hiciera falta :)'
  },
  {
    name: 'João',
    text: 'Sou tatuador e como tal trabalho com clientes diariamente, e presto demasiada atenção na forma como me tratam quando sou atendido, a Dra. Elizabeth conquistou toda a minha confiança na primeira consulta com o seu profissionalismo de excelência e atenção com o seu paciente. Recomendo muito e não troco por nada. 10 estrelas'
  },
  {
    name: 'Nuno Ferraz',
    text: 'Excelente Médica dentista, simpática profissional e perfeccionista, recomendo a quem quiser fazer tratamentos dentários de excelência , é muito boa mesmo em cirurgia funcional - implantes e em estetica, como coroas e facetas - 10 estrelas.'
  },
  {
    name: 'LU',
    text: 'Muito profissional, simpática. Sentido estético excelente. Domina as técnicas mais avançadas e explicou muito bem o que se iria passar antes, durante e após procedimento.'
  },
  {
    name: 'Bruno',
    text: 'Super simpática, fiquei bastante esclarecido sobre o meu tratamento. Obrigado Dra. Elízabeth por tratar tão bem de mim e do meu sorriso!'
  },
]

class ReviewsSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPosition: 0,
      sliderInterval: false,
      sliderPaused: false,
      sliderCardWidth: 0,
    }

    this.movePrev = this.movePrev.bind(this);
    this.moveNext = this.moveNext.bind(this);
  }
  
  movePrev() {
    if(this.state.currentPosition > 0) {
      this.setState({
        currentPosition: this.state.currentPosition - 1,
      });
    }
  }

  moveNext() {
    if(this.state.currentPosition < reviews.length - 3) {
      this.setState({
        currentPosition: this.state.currentPosition + 1,
      });
    }
  }

  componentDidMount() {
    let sliderCardWidth = document.querySelector('.review-card').clientWidth;
    
    this.setState({
      sliderCardWidth,
      sliderInterval: setInterval(() => {
        if(!this.state.sliderPaused) {
          this.moveNext()
        }
      }, 8000)
    })
  }

  render() {
    const { t } = this.props;

    return (
      <section className="reviews">
        <header className="section-header">
          <div className="container flex-center-col">
            <div className="ratings">
              <p className="label-small">{t('page-home.section-reviews.section-title-label')} <a href="https://www.doctoralia.com.pt/elizabeth-p-anta/dentista/lisboa#tab=profile-reviews">Doctoralia</a></p>
            </div>

            <div className="title-wrapper flex align-center repel">
              <button className="review-paginator prev" onClick={this.movePrev}></button>
              <h4 className="section-title title-1">{t('page-home.section-reviews.section-title')}</h4>
              <button className="review-paginator next" onClick={this.moveNext}></button>
            </div>
          </div>
        </header>

        <div className="reviews-slider" onMouseEnter={() => { this.setState({ sliderPaused: true }) }} onMouseLeave={() => { this.setState({ sliderPaused: false }) }}>
          <div className="reviews-wrapper">
            <ul className="reviews-container" style={{transform: 'translate(-' + this.state.currentPosition * this.state.sliderCardWidth + 'px)'}} >
              {reviews.map(review => (
                <ReviewCard name={review.name} text={review.text} />
              ))}
            </ul>
          </div>
        </div>

        <footer className="section-footer">
          <div className="container flex-center-col">
            <a className="button-regular" href='https://www.doctoralia.com.pt/adicionar-opiniao/elizabeth-p-anta#/opini%C3%A3o'>{t('page-home.section-reviews.section-button')}</a>
          </div>
        </footer>
      </section>
    )
  }
}

export default withTranslation()(ReviewsSlider);
