
import {
  Component,
  HostListener,
  OnInit,
  signal
} from '@angular/core';

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  // ==========================================
  // CABEÇALHO
  // ==========================================

  readonly menuOpen = signal(false);
  readonly isScrolled = signal(false);

  toggleMenu(): void {
    this.menuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 50);
    }
  }

  // ==========================================
  // ROTEIRO EXPEDIÇÃO EGITO 2027
  // ==========================================

  readonly selectedDay = signal(0);

  readonly itinerary: ItineraryDay[] = [
    {
      day: 0,
      title: 'Saída do Brasil',
      description:
        'Início da expedição com a saída do Brasil em direção ao Egito. O embarque será realizado conforme os voos internacionais contratados.',
      image: 'roteiro/dia-00-saida-brasil.jpg',
      highlights: [
        'Saída do Brasil',
        'Viagem internacional'
      ]
    },
    {
      day: 1,
      title: 'Chegada ao Cairo',
      description:
        'Chegada ao Cairo, capital do Egito. Recepção no aeroporto, com auxílio nos procedimentos de chegada e início da nossa jornada pela terra dos faraós.',
      image: 'roteiro/dia-01-chegada-cairo.jpg',
      highlights: [
        'Chegada ao Cairo',
        'Recepção no aeroporto',
        'Início da expedição'
      ]
    },
    {
      day: 2,
      title: 'Pirâmides, Esfinge e Grande Museu Egípcio',
      description:
        'Um dia para conhecer as Pirâmides de Gizé, a Esfinge, o Grande Museu Egípcio (GEM) e a Fábrica de Papiro. O roteiro também prevê passeio de camelo.',
      image: 'roteiro/dia-02-piramides-esfinge.jpg',
      highlights: [
        'Pirâmides de Gizé',
        'Passeio de camelo',
        'Grande Esfinge',
        'Grande Museu Egípcio',
        'Fábrica de Papiro'
      ]
    },
    {
      day: 3,
      title: 'Dia livre ou Saqqara',
      description:
        'Dia livre para aproveitar o Cairo ou realizar um passeio opcional a Saqqara, importante região arqueológica do Egito. A atividade opcional não está incluída no valor básico do pacote.',
      image: 'roteiro/dia-03-saqqara-opcional.jpg',
      highlights: [
        'Dia livre',
        'Saqqara: opcional',
        'História do Egito Antigo'
      ]
    },
    {
      day: 4,
      title: 'História e cultura do Cairo',
      description:
        'Visita à Cidadela de Saladino, Mesquita de Mohammed Ali, Bairro Copta, Igreja de São Sérgio, Cripta da Sagrada Família, Sinagoga e Mercado Khan el Khalili.',
      image: 'roteiro/dia-04-cairo-historico.jpg',
      highlights: [
        'Cidadela de Saladino',
        'Mesquita de Mohammed Ali',
        'Bairro Copta',
        'Khan el Khalili'
      ]
    },
    {
      day: 5,
      title: 'Aswan e início do cruzeiro pelo Nilo',
      description:
        'Voo doméstico para Aswan. Visita ao Templo de Philae, Obelisco Inacabado e Casa de Essências. Início do cruzeiro pelo Rio Nilo, passeio de feluca e possibilidade de conhecer a Vila Núbia, atividade opcional.',
      image: 'roteiro/dia-05-aswan-philae.jpg',
      highlights: [
        'Voo Cairo–Aswan',
        'Templo de Philae',
        'Cruzeiro pelo Nilo',
        'Passeio de feluca',
        'Vila Núbia: opcional'
      ]
    },
    {
      day: 6,
      title: 'Abu Simbel e Kom Ombo',
      description:
        'Dia livre ou passeio opcional aos templos de Abu Simbel. A programação também inclui o Templo de Sobek em Kom Ombo, o Museu do Crocodilo e uma festa à fantasia durante o cruzeiro.',
      image: 'roteiro/dia-06-kom-ombo.jpg',
      highlights: [
        'Abu Simbel: opcional',
        'Templo de Sobek',
        'Museu do Crocodilo',
        'Festa à fantasia'
      ]
    },
    {
      day: 7,
      title: 'Edfu, Esna, Karnak e Luxor',
      description:
        'Visitas ao Templo de Hórus em Edfu, passagem pela Eclusa de Esna e exploração dos impressionantes templos de Karnak e Luxor.',
      image: 'roteiro/dia-07-karnak-luxor.jpg',
      highlights: [
        'Templo de Hórus',
        'Eclusa de Esna',
        'Templo de Karnak',
        'Templo de Luxor'
      ]
    },
    {
      day: 8,
      title: 'Vale dos Reis e chegada a Hurghada',
      description:
        'Possibilidade de passeio opcional de balão. Visitas ao Vale dos Reis, Fábrica de Alabastro, Templo da Rainha Hatshepsut e Colossos de Memnon. Depois, saída para Hurghada e hospedagem em resort.',
      image: 'roteiro/dia-08-hatshepsut-vale-reis.jpg',
      highlights: [
        'Balão: opcional',
        'Vale dos Reis',
        'Templo de Hatshepsut',
        'Colossos de Memnon',
        'Resort em Hurghada'
      ]
    },
    {
      day: 9,
      title: 'Mar Vermelho e Ilhas Giftun',
      description:
        'Dia livre para aproveitar Hurghada ou realizar um passeio opcional de barco pelo Mar Vermelho, com visita às Ilhas Giftun, snorkel e praia.',
      image: 'roteiro/dia-09-mar-vermelho-giftun.jpg',
      highlights: [
        'Mar Vermelho',
        'Passeio de barco: opcional',
        'Ilhas Giftun',
        'Snorkel',
        'Praia'
      ]
    },
    {
      day: 10,
      title: 'Dia livre no resort',
      description:
        'Dia dedicado ao descanso e ao aproveitamento da estrutura do resort em Hurghada, às margens do Mar Vermelho.',
      image: 'roteiro/dia-10-resort-hurghada.jpg',
      highlights: [
        'Dia livre',
        'Resort all inclusive',
        'Descanso',
        'Mar Vermelho'
      ]
    },
    {
      day: 11,
      title: 'Hurghada, Cairo e jantar de despedida',
      description:
        'Tempo livre na praia do resort, retorno ao Cairo e jantar de despedida para celebrar a jornada pelo Egito.',
      image: 'roteiro/dia-11-retorno-cairo.jpg',
      highlights: [
        'Praia do resort',
        'Retorno ao Cairo',
        'Jantar de despedida'
      ]
    },
    {
      day: 12,
      title: 'Traslado ao aeroporto do Cairo',
      description:
        'Traslado ao aeroporto do Cairo no horário previsto e encerramento dos serviços organizados da expedição.',
      image: 'roteiro/dia-12-aeroporto-cairo.jpg',
      highlights: [
        'Traslado ao aeroporto',
        'Fim dos serviços'
      ]
    },
    {
      day: 13,
      title: 'Chegada ao Brasil',
      description:
        'Chegada ao Brasil e encerramento da jornada, conforme o itinerário dos voos internacionais contratados.',
      image: 'roteiro/dia-13-voo-brasil.jpg',
      highlights: [
        'Chegada ao Brasil',
        'Fim da viagem'
      ]
    }
  ];

  // ==========================================
  // CONTROLE DO ROTEIRO INTERATIVO
  // ==========================================

  get activeDay(): ItineraryDay {
    return this.itinerary.find(
      item => item.day === this.selectedDay()
    ) ?? this.itinerary[0];
  }

  selectDay(day: number): void {
    if (this.itinerary.some(item => item.day === day)) {
      this.selectedDay.set(day);
    }
  }

  nextDay(): void {
    this.selectedDay.update(day => {
      const index = this.itinerary.findIndex(
        item => item.day === day
      );

      const nextIndex =
        (index + 1) % this.itinerary.length;

      return this.itinerary[nextIndex].day;
    });
  }

  previousDay(): void {
    this.selectedDay.update(day => {
      const index = this.itinerary.findIndex(
        item => item.day === day
      );

      const previousIndex =
        (index - 1 + this.itinerary.length) %
        this.itinerary.length;

      return this.itinerary[previousIndex].day;
    });
  }

  // ==========================================
  // WHATSAPP — DOIS CANAIS COMERCIAIS
  // ==========================================

  // Vendedor 1: atendimento padrão.
  // Vendedor 2: atendimento pelo link ?vendedor=2.
  //
  // IMPORTANTE:
  // Confirmar o número do vendedor 2,
  // informado com 10 dígitos incluindo o DDD.

 
private readonly whatsappNumbers: Record<string, string> = {
  '1': '5511986028266', // Atendimento padrão
  '2': '553192887342'   // Atendimento da Patti
};


  readonly whatsappUrl = signal<string | null>(null);

  readonly whatsappMessage =
    'Olá! Tenho interesse na Expedição Egito 2027. ' +
    'Gostaria de receber mais informações sobre a viagem.';

  ngOnInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.onWindowScroll();
    this.configureWhatsapp();
  }

  private configureWhatsapp(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const params = new URLSearchParams(
      window.location.search
    );

    const vendedor = params.get('vendedor');

    // Sem parâmetro, utiliza o atendimento padrão.
    const vendedorSelecionado =
      vendedor === '2' ? '2' : '1';

    const numero =
      this.whatsappNumbers[vendedorSelecionado];

    if (!numero || !/^55\d{10,11}$/.test(numero)) {
      this.whatsappUrl.set(null);
      return;
    }

    const mensagem = encodeURIComponent(
      this.whatsappMessage
    );

    this.whatsappUrl.set(
      `https://wa.me/${numero}?text=${mensagem}`
    );
  }
}
