

export default class Bke
{

		//*********************initialisatie bij aanroepen constructor*****************************************
	constructor() {
		this.vakjes= new Array(3);
		this.spelActief=false;

		for(let i=0; i<3; i++)
		{
			this.vakjes[i]=new Array(3);
		}
		this.reset();
	}

		//***********************einde initialisatie***********************************************************

	maakSpelActief()
	{
		this.spelActief=true;
	}
	
	isSpelActief()
	{
		return this.spelActief;
	}
	
	isGelijkspel()
	{
		let gelijkspel=true;

		for(let rij=0; rij<3; rij++)
		{	
			for (let kolom = 0; kolom <3; kolom++)
			{
				if(this.vakjes[rij][kolom]==="LEEG")
				{
					gelijkspel=false;
				}
			}
		}
		
		if(gelijkspel===true)
		{
			this.spelActief=false;
		}	
		
		return gelijkspel;
	}
	
	isWinnaar(symbool)
	{
		let kolom;
		let rij;
		let winnaar=false;
		
		/////////////////////Controle Horizontaal/////////////////////////
		for(rij = 0; rij<3; rij++)
		{
				if ((this.vakjes[rij][0] === symbool && this.vakjes[rij][1] === symbool && this.vakjes[rij][2] === symbool) )
				{
					this.vakjes[rij][0]="GROEN";
					this.vakjes[rij][1]="GROEN";
					this.vakjes[rij][2]="GROEN";
					this.spelActief=false;
					winnaar = true;
				}
		}
		
		/////////////////////Controle Verticaal///////////////////////////
		for(kolom=0;kolom<7;kolom++)
		{	

				if ((this.vakjes[0][kolom] === symbool && this.vakjes[1][kolom] === symbool && this.vakjes[2][kolom] === symbool ))
				{
					this.vakjes[0][kolom]="GROEN";
					this.vakjes[1][kolom]= "GROEN";
					this.vakjes[2][kolom]="GROEN";
					this.spelActief=false;
					winnaar = true;
				}

		}
		
		
		///////////////////////Controle Diagonaal /////////

		if (this.vakjes[0][0] === symbool && this.vakjes[1][1] === symbool && this.vakjes[2][2] === symbool )
		{
			this.vakjes[0][0]="GROEN";
			this.vakjes[1][1]="GROEN";
			this.vakjes[2][2]="GROEN";

			this.spelActief=false;
			winnaar = true;
		}

		if (this.vakjes[0][2] === symbool && this.vakjes[1][1] === symbool && this.vakjes[2][0] === symbool)
		{
			this.vakjes[0][2]="GROEN";
			this.vakjes[1][1]="GROEN";
			this.vakjes[2][0]="GROEN";

			this.spelActief=false;
			winnaar = true;
		}
		return winnaar;
	}
	
	reset()
	{
		for(let rij=0; rij<3; rij++)
		{
			for (let kolom=0; kolom<3; kolom++)
			{
				this.vakjes[rij][kolom]="LEEG";
			}
		}
	}
	
	getFiches()
	{
		return this.vakjes;
	}
	
	magZet(rij,kolom,symbool)
	{
		//window.alert(rij+" "+kolom);
			if(this.vakjes[rij][kolom]==="LEEG")
			{
				this.vakjes[rij][kolom]= symbool;
				return true;
			}
		return false;
	}
	
}