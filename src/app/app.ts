
import {
  Component,
  HostListener,
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
export class App {

  
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


  readonly selectedDay = signal(1);

  readonly itinerary: ItineraryDay[] = [
    {
      day: 1,
      title: 'Chegada ao Cairo',
      description:
        'Chegada ao aeroporto do Cairo, recepção e traslado ao hotel. Tempo livre para descansar e começar a sentir a atmosfera do Egito.',
      image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1200&q=85',
      highlights: ['Chegada ao Egito', 'Traslado ao hotel', 'Noite livre']
    },
    {
      day: 2,
      title: 'Pirâmides de Gizé e Esfinge',
      description:
        'Visita às Pirâmides de Quéops, Quéfren e Miquerinos, à Esfinge e ao Museu Egípcio. Um dia dedicado aos grandes símbolos da civilização egípcia.',
      image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=1200&q=85',
      highlights: ['Pirâmides de Gizé', 'Grande Esfinge', 'Museu Egípcio']
    },
    {
      day: 3,
      title: 'Cairo → Luxor',
      description:
        'Traslado ao aeroporto e voo para Luxor, cidade que reúne alguns dos templos mais impressionantes do Egito. Check-in no hotel e noite livre.',
      image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&w=1200&q=85',
      highlights: ['Voo para Luxor', 'Check-in no hotel', 'Noite livre']
    },
    {
      day: 4,
      title: 'Templos de Luxor e Karnak',
      description:
        'Visita aos templos de Luxor e Karnak, conhecidos por suas colunas monumentais, estátuas e construções que atravessaram milênios.',
      image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=1200&q=85',
      highlights: ['Templo de Luxor', 'Templo de Karnak', 'Arquitetura milenar']
    },
    {
      day: 5,
      title: 'Vale dos Reis e Hatshepsut',
      description:
        'Exploração das tumbas reais no Vale dos Reis e visita ao impressionante Templo de Hatshepsut, construído entre as montanhas.',
      image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=85',
      highlights: ['Vale dos Reis', 'Tumbas dos faraós', 'Templo de Hatshepsut']
    },
    {
      day: 6,
      title: 'Luxor → Aswan',
      description:
        'Viagem de ônibus ou voo para Aswan. Passeio de feluca no Rio Nilo ao pôr do sol, contemplando as paisagens da região.',
      image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&w=1200&q=85',
      highlights: ['Deslocamento para Aswan', 'Rio Nilo', 'Passeio de feluca']
    },
    {
      day: 7,
      title: 'Abu Simbel',
      description:
        'Dia dedicado aos impressionantes templos de Abu Simbel, uma das grandes obras da engenharia antiga. Visita opcional, conforme o pacote contratado.',
      image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=1200&q=85',
      highlights: ['Templos de Abu Simbel', 'História dos faraós', 'Passeio opcional']
    },
    {
      day: 8,
      title: 'Aswan → Cairo',
      description:
        'Voo de retorno ao Cairo. Tempo livre para explorar a cidade, fazer compras e experimentar a gastronomia local.',
      image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1200&q=85',
      highlights: ['Retorno ao Cairo', 'Compras', 'Gastronomia']
    },
    {
      day: 9,
      title: 'Despedida do Egito',
      description:
        'Traslado ao aeroporto e encerramento da expedição, levando na bagagem lembranças de uma viagem inesquecível.',
      image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=1200&q=85',
      highlights: ['Traslado ao aeroporto', 'Fim da expedição']
    }
  ];

  get activeDay(): ItineraryDay {
    return this.itinerary.find(
      item => item.day === this.selectedDay()
    ) ?? this.itinerary[0];
  }

  selectDay(day: number): void {
    this.selectedDay.set(day);
  }

  nextDay(): void {
    this.selectedDay.update(day => day === 9 ? 1 : day + 1);
  }

  previousDay(): void {
    this.selectedDay.update(day => day === 1 ? 9 : day - 1);
  }
}
