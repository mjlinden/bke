import ViewBeheerder from "../view/ViewBeheerder";
import VierOpEenRij from "../model/VierOpEenRij";
import Speler from "../model/Speler";

export default class Controller
{
	constructor()
	{
		this.model = new VierOpEenRij();
		this.view = new ViewBeheerder(reageerKlikOpSpeelveld, reageerKlikOpStart, reageerKlikOpNieuwSpel, reageerKlikOpStoppen);
		this.speler1=new Speler(true,"ROOD");
		this.speler2=new Speler(false,"GEEL");
		this.ViewBeheerder.toonStartscherm();
	}
	
	reageerKlikOpNieuwSpel()
	{
		model.reset();
		var fiches = model.getFiches();
		view.toonFiches(fiches);
		
		if(speler1.benIkAanBeurt())
		{
			view.toonMededeling(speler1.getNaam() + " is aan de beurt");
		}
		else
		{
			view.toonMededeling(speler2.getNaam() + " is aan de beurt");
		}
		
		model.maakSpelActief();
		view.verbergNavigatie();
	}
	
	
	reageerKlikOpStoppen()
	{
		
		view.toonStartscherm();
		view.resetNamen();
	}
	
	reageerKlikOpStart(event)
	{
		model.reset();
		
		//update view
		const fiches = model.getFiches();
		view.toonFiches(fiches);
		
		speler1.resetScore();
		speler2.resetScore();
		
		const naam1=ViewBeheerder.getNaamSpeler1();
		const naam2=view.getNaamSpeler2();
		
		if(naam1!==naam2 && naam1!=="" && naam2 !=="")
		{
			speler1.setNaam(naam1);
			speler2.setNaam(naam2);
		
		
		
			ViewBeheerder.toonSpeelveldscherm();
			view.verbergNavigatie();
			ViewBeheerder.toonSpelers(speler1,speler2);
			
			if(speler1.benIkAanBeurt())
			{
				view.toonMededeling(speler1.getNaam() + " is aan de beurt");
			}
			else
			{
				view.toonMededeling(speler2.getNaam() + " is aan de beurt");
			}
			
			model.maakSpelActief();
		}
	}
	
	reageerKlikOpSpeelveld(event)
	{
		var actieveSpeler,passieveSpeler;
		if (model.isSpelActief())
		{
			var kolomNummer = view.getGeklikteKolom(event);
			
			if(speler1.benIkAanBeurt()===true)
			{
				actieveSpeler=speler1;
				passieveSpeler=speler2;
			}
			else
			{
				passieveSpeler=speler1;
				actieveSpeler=speler2;
			}
			
			
			var hetMag = model.magZet(kolomNummer,actieveSpeler.getKleur());
			if(hetMag===true)
			{
				var winnaar= model.isWinnaar(actieveSpeler.getKleur());
				if(winnaar===true)
				{	
					actieveSpeler.verhoogScore();
					view.toonMededeling(actieveSpeler.getNaam()+" heeft gewonnen!!!");
							
					ViewBeheerder.toonSpelers(speler1,speler2);
					view.toonNavigatie();
				}
				
				var gelijkspel=model.isGelijkspel();
				if(gelijkspel===true)
				{
					view.toonMededeling("gelijkspel!");
					view.toonNavigatie();
				}
				//update view
				var fiches = model.getFiches();
				view.toonFiches(fiches);
							
				speler1.wisselBeurt();
				speler2.wisselBeurt();
				
				if (model.isSpelActief())
				{
					view.toonMededeling(passieveSpeler.getNaam() + " is aan de beurt");
				}
			}
			else
			{
				view.toonMededeling(actieveSpeler.getNaam() + " ,de kolom is vol");
			}	
		}
	}
}