import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-love-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './love-page.html',
  styleUrls: ['./love-page.css']
})
export class LovePageComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/memories/photo1.jpg',
    'assets/memories/photo2.jpg',
    'assets/memories/photo3.jpg',
    'assets/memories/photo4.jpg',
    'assets/memories/photo5.jpg',
    'assets/memories/photo6.jpg',
    'assets/memories/photo7.jpg',
    'assets/memories/photo8.jpg',
    'assets/memories/photo9.jpg',
    'assets/memories/photo10.jpg',
    'assets/memories/photo11.jpg',
    'assets/memories/photo12.jpg',
  ];
  specialDays: string[] = [
    '2023 Fest n aadhyam aayt oru nepali koch ne kandu',
    '11 May 2024 n msg ayach thudengy',
    '20 Aug 2024 first date enn venamenkil parayam',
    '13 Sept 2024 Venjaramoodu bus stop drop chythu',
    '11 Nov 2024 Freefire journey started',
    '25 Nov 2024 Block aakki',
    '07 Jan 2025 First Proposal - Rejected',
    '23 Jan 2025 AOC Lab workshop',
    '23 Feb 2025 - First Snap',
    '26 Feb 2025 IV yk vaangi kodtha butterfly clip vechu',
    '19 March 2025 - Urengy urengy call',
    '28,29 March 2025 - Clg le last fest and Arts day',
    '15 April 2025 - First pickup line avl adich',
    '27 May 2025 Bet jaichath kond avl propose chythu',
    '12 July 2025 Veendum proposal and rejection',
    '14 July 2025 - Convocation day veetil ellarkum kaanich kodthu was awkward but ellarkum ishtapett',
    '17 Aug 2025 - First Coffee ',
    '20 Aug 2025 - Night ride @Thampanoor',
    '1 Sept 2025 - Ikkachi housewarming nte ann oonjal aati',
    '13 Sept 2025 - Demon Slayer Good but a bad day',

  ];

  floatingTexts: any[] = []; // will hold random positions and delays


  currentIndex = 0;
  previousIndex: number | null = null;
  intervalId: any;
  animationKey = 0; // NEW: force Angular to recreate image element

  sparkles: any[] = [];

  constructor(private cd: ChangeDetectorRef) {}
  audio!: HTMLAudioElement;

  ngOnInit() {
    this.createSparkles();
    this.createFloatingTexts();
    this.startSlideshow();
  
    // Play background audio
    this.audio = new Audio('assets/audio/love-song.mp3');
    this.audio.loop = true;   // continuous loop
    this.audio.volume = 0.5;  // optional volume
    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.warn('Autoplay blocked:', err);
        // Optionally, you can mute and retry
        this.audio.muted = true;
        this.audio.play();
      });
    }
  }
  

  ngOnDestroy() {
    clearInterval(this.intervalId);
    // Stop audio when leaving page
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  startSlideshow() {
    this.intervalId = setInterval(() => {
      this.previousIndex = this.currentIndex;
      this.currentIndex = (this.currentIndex + 1) % this.images.length;

      this.animationKey++; // increment key to retrigger animation
      this.cd.detectChanges();

      // remove previous after animation
      setTimeout(() => {
        this.previousIndex = null;
        this.cd.detectChanges();
      }, 1000);
    }, 1000);
  }

  createSparkles() {
    this.sparkles = Array.from({ length: 40 }, () => ({
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 8 + 4
    }));
  }
  createFloatingTexts() {
  const container = document.querySelector('.container') as HTMLElement;
  const containerWidth = container?.offsetWidth || 800; // fallback to 800px

  this.floatingTexts = this.specialDays.map((text, i) => {
    const fontSize = Math.random() * 24 + 16;
    const textWidth = text.length * fontSize * 0.6; // rough estimate

    // Calculate safe left position: text stays within container
    const maxLeft = containerWidth - textWidth - 20; // 20px margin
    const leftPx = Math.random() * Math.max(maxLeft, 0);

    return {
      text,
      leftPx,
      delay: i * 2, // stagger
      size: fontSize,
      duration: Math.random() * 15 + 12
    };
  });
}
toggleAudio() {
  if (!this.audio) return;

  if (this.audio.paused) {
    this.audio.play();
  } else {
    this.audio.pause();
  }
}

  
  
  trackByKey(index: number, item: any) {
    return this.animationKey; // forces new element
  }
}
