

export default class VierOpEenRij
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
				if(vakjes[rij][kolom]==="LEEG")
				{
					this.gelijkspel=false;
				}
			}
		}
		
		if(this.gelijkspel===true)
		{
			this.spelActief=false;
		}	
		
		return this.gelijkspel;
	}
	
	isWinnaar( kleur)
	{
		let kolom;
		let rij;
		let winnaar=false;
		
		/////////////////////Controle Horizontaal/////////////////////////
		for(rij = 0; rij<3; rij++)
		{
				if ((this.vakjes[rij][0] === kleur && this.vakjes[rij][1] === kleur && this.vakjes[rij][2] === kleur) )
				{
					vakjes[rij][0]="GROEN";
					vakjes[rij][1]= "GROEN";
					vakjes[rij][2]="GROEN";
					this.spelActief=false;
					winnaar = true;
				}
		}
		
		/////////////////////Controle Verticaal///////////////////////////
		for(kolom=0;kolom<7;kolom++)
		{	

				if ((this.vakjes[0][kolom] === kleur && this.vakjes[1][kolom] === kleur && this.vakjes[2][kolom] === kleur ))
				{
					vakjes[0][kolom]="GROEN";
					vakjes[1][kolom]= "GROEN";
					vakjes[2][kolom]="GROEN";
					this.spelActief=false;
					winnaar = true;
				}

		}
		
		
		///////////////////////Controle Diagonaal /////////

		if (this.vakjes[0][0] === kleur && this.vakjes[1][1] === kleur && this.vakjes[2][2] === kleur )
		{
			vakjes[0][0]="GROEN";
			vakjes[1][1]="GROEN";
			vakjes[2][2]="GROEN";

			this.spelActief=false;
			winnaar = true;
		}

		if (this.vakjes[0][2] === kleur && this.vakjes[1][1] === kleur && this.vakjes[2][0] === kleur)
		{
			vakjes[0][2]="GROEN";
			vakjes[1][1]="GROEN";
			vakjes[2][0]="GROEN";

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
	
	magZet(rij,kolom,kleur)
	{
			if(this.vakjes[rij][kolom]==="LEEG")
			{
				this.vakjes[rij][kolom]= kleur;
				return true;
			}
		return false;
	}
	
}