import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlaylistCardsComponent } from './my-playlist-cards.component';

describe('MyPlaylistCardsComponent', () => {
  let component: MyPlaylistCardsComponent;
  let fixture: ComponentFixture<MyPlaylistCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPlaylistCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlaylistCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
