

export class Fish {
    constructor(species, water_temp, compatible_with, size, min_tank_size) {
        this.species = species
        this.water_temp = water_temp
        this.compatible_with = compatible_with
        this.size = size
        this.min_tank_size = min_tank_size
    }
}

export class Dwarf_Gourami {
    constructor() {
    this.species = 'Dwarf_Gourami'
    this.water_temp_min = 72
    this.water_temp_max = 82
    this.ph_min = 6
    this.ph_max = 8
    this.incompatible_with = ['betta_male']
    this.size = 2.5
    this.min_tank_size = 10
    }

}

export class Betta_Male {
    constructor() {
    this.species = 'Betta_Male'
    this.water_temp_min = 76
    this.water_temp_max = 85
    this.ph_min = 6.8
    this.ph_max = 7.5
    this.incompatible_with = []
    this.size = 2.5
    this.min_tank_size = 5
    }

}

export class Betta_Female {
    constructor() {
    this.species = 'Betta_Female'
    this.water_temp_min = 76
    this.water_temp_max = 85
    this.ph_min = 6.8
    this.ph_max = 7.5
    this.incompatible_with = []
    this.size = 2.5
    this.min_tank_size = 5
    }

}

export class Cherry_Shrimp {
    constructor() {
    this.species = 'Cherry_Shrimp'
    this.water_temp_min = 65
    this.water_temp_max = 82
    this.ph_min = 6.7
    this.ph_max = 8.5
    this.incompatible_with = []
    this.size = 0.2
    this.min_tank_size = 1
    }

}

