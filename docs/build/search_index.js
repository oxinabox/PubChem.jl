var documenterSearchIndex = {"docs":
[{"location":"attaching_metadata/attach_metadata_macro.html#attach_metadata_macro","page":"Attaching Metdata","title":"Attaching Metdata","text":"","category":"section"},{"location":"attaching_metadata/attach_metadata_macro.html","page":"Attaching Metdata","title":"Attaching Metdata","text":"In this tutorial we provide an introduction to using PubChem.jl to attach chemical properties as metadata to species defined using the Catalyst package.","category":"page"},{"location":"attaching_metadata/attach_metadata_macro.html#Basic-Syntax","page":"Attaching Metdata","title":"Basic Syntax","text":"","category":"section"},{"location":"attaching_metadata/attach_metadata_macro.html","page":"Attaching Metdata","title":"Attaching Metdata","text":"We first import the basic packages we'll need:","category":"page"},{"location":"attaching_metadata/attach_metadata_macro.html","page":"Attaching Metdata","title":"Attaching Metdata","text":"# If not already installed, first hit \"]\" within a Julia REPL. Then type:\r\n# add PubChem Catalyst \r\n\r\nusing PubChem, Catalyst","category":"page"},{"location":"attaching_metadata/attach_metadata_macro.html","page":"Attaching Metdata","title":"Attaching Metdata","text":"We now start by defining our species using the @species macro from Catalyst.","category":"page"},{"location":"attaching_metadata/attach_metadata_macro.html","page":"Attaching Metdata","title":"Attaching Metdata","text":"@variables t\r\n@species HCl(t)\r\nnothing # hide","category":"page"},{"location":"attaching_metadata/attach_metadata_macro.html","page":"Attaching Metdata","title":"Attaching Metdata","text":"Now we attach the chemical properties fetched from PubChem using the attach_metadata macro.","category":"page"},{"location":"attaching_metadata/attach_metadata_macro.html","page":"Attaching Metdata","title":"Attaching Metdata","text":"@attach_metadata HCl\r\nnothing # hide","category":"page"},{"location":"attaching_metadata/attach_metadata_macro.html","page":"Attaching Metdata","title":"Attaching Metdata","text":"The attach_metadata macro queries the PubChem database and attaches the appropriate chemical properties to our species. We can now retrieve the chemical properties:","category":"page"},{"location":"attaching_metadata/attach_metadata_macro.html","page":"Attaching Metdata","title":"Attaching Metdata","text":"properties(HCl)","category":"page"},{"location":"attaching_metadata/attach_metadata_macro.html","page":"Attaching Metdata","title":"Attaching Metdata","text":"In some cases, we may wish to assign chemical properties to a variable with a custom name. In such cases, we can use the IUPAC name of the species. ","category":"page"},{"location":"attaching_metadata/attach_metadata_macro.html","page":"Attaching Metdata","title":"Attaching Metdata","text":"using PubChem, Catalyst\r\n\r\n@variables t\r\n@species X(t)\r\n@attach_metadata X \"H2O\"\r\nnothing # hide","category":"page"},{"location":"attaching_metadata/attach_metadata_macro.html","page":"Attaching Metdata","title":"Attaching Metdata","text":"The chemical properties of water have now been attached to X.","category":"page"},{"location":"attaching_metadata/attach_metadata_macro.html","page":"Attaching Metdata","title":"Attaching Metdata","text":"properties(X)","category":"page"},{"location":"attaching_metadata/attach_metadata_macro.html","page":"Attaching Metdata","title":"Attaching Metdata","text":"Similary, we can use the CID of the species when the name of the species is complex or difficult to work with. ","category":"page"},{"location":"attaching_metadata/attach_metadata_macro.html","page":"Attaching Metdata","title":"Attaching Metdata","text":"using PubChem, Catalyst\r\n\r\n@variables t\r\n@species Y(t)\r\n@attach_metadata Y 977 #CID of Oxygen\r\nnothing # hide","category":"page"},{"location":"attaching_metadata/attach_metadata_macro.html","page":"Attaching Metdata","title":"Attaching Metdata","text":"The chemical properties of oxygen have now been attached to Y.","category":"page"},{"location":"attaching_metadata/attach_metadata_macro.html","page":"Attaching Metdata","title":"Attaching Metdata","text":"properties(Y)","category":"page"},{"location":"index.html#index","page":"Home","title":"PubChem.jl","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"PubChem.jl is a powerful Julia package that facilitates easy access to chemical data from the PubChem database and associates it with chemical species defined using the Catalyst.jl package. This allows you to seamlessly integrate chemical metadata into your computational workflows.","category":"page"},{"location":"index.html#Features","page":"Home","title":"Features","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Effortlessly retrieve chemical information from the PubChem database using the PubChem REST API.\nDetermine the molar ratios, liming reagent and theoritical yield in a chemical reaction.\nCalculate the number of moles of a compound.","category":"page"},{"location":"index.html#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"PubChem can be installed through the Julia package manager:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"using Pkg\r\nPkg.add(\"PubChem\")","category":"page"},{"location":"index.html#Illustrative-Example","page":"Home","title":"Illustrative Example","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"To retrieve chemical properties for the compound H2O, begin by defining the compound as you would in Catalyst and then attach the relevant metadata:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"using PubChem, Catalyst\r\n@variables t\r\n@species H2O(t)\r\n@attach_metadata H2O","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"Now, our species H2O contains chemical data retrieved from PubChem as its metadata. To access and query this data, you can utilize the following method:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"properties(H2O)","category":"page"},{"location":"chemical_calculations/chemical_calculations.html#Chemical-Calculations","page":"Chemical Calculations","title":"Chemical Calculations","text":"","category":"section"},{"location":"chemical_calculations/chemical_calculations.html","page":"Chemical Calculations","title":"Chemical Calculations","text":"You can now utilize the chemical properties fetched in the previous tutorial to perform various calculations, such as determining the limiting reagent and calculating theoretical yields in a balanced Catalyst reaction.","category":"page"},{"location":"chemical_calculations/chemical_calculations.html#Determining-Limiting-Reagent","page":"Chemical Calculations","title":"Determining Limiting Reagent","text":"","category":"section"},{"location":"chemical_calculations/chemical_calculations.html","page":"Chemical Calculations","title":"Chemical Calculations","text":"As an example, let's consider the reaction 2Al + 3Cl2 --> 2AlCl3 and suppose we have the masses of Al and Cl2 as 2.80g and 4.15g, respectively.","category":"page"},{"location":"chemical_calculations/chemical_calculations.html","page":"Chemical Calculations","title":"Chemical Calculations","text":"We begin by defining the species involved in the reaction and attaching metadata to them using the @attach_metadata macro. ","category":"page"},{"location":"chemical_calculations/chemical_calculations.html","page":"Chemical Calculations","title":"Chemical Calculations","text":"using PubChem, Catalyst\r\n\r\n# Define the species involved in the reaction\r\n@variables t\r\n@species Al(t), Cl2(t), AlCl3(t)\r\n\r\n# Attach metadata to the species\r\n@attach_metadata Al \r\n@attach_metadata Cl2 \r\n@attach_metadata AlCl3 \r\nnothing #hide","category":"page"},{"location":"chemical_calculations/chemical_calculations.html","page":"Chemical Calculations","title":"Chemical Calculations","text":"We then define the relevant reaction in Catalyst.","category":"page"},{"location":"chemical_calculations/chemical_calculations.html","page":"Chemical Calculations","title":"Chemical Calculations","text":"# Define a balanced Catalyst reaction \r\nrx = Reaction(1.0, [Al, Cl2], [AlCl3], [2, 3], [2])","category":"page"},{"location":"chemical_calculations/chemical_calculations.html","page":"Chemical Calculations","title":"Chemical Calculations","text":"note: Note\nThe reaction should be stoichiometrically balanced.","category":"page"},{"location":"chemical_calculations/chemical_calculations.html","page":"Chemical Calculations","title":"Chemical Calculations","text":"We can then calculate the limiting reagent given the masses of the reactants.","category":"page"},{"location":"chemical_calculations/chemical_calculations.html","page":"Chemical Calculations","title":"Chemical Calculations","text":"limiting_reagent(rx,[2.80,4.15])  # Returns the limiting reagent and it's number of moles","category":"page"},{"location":"chemical_calculations/chemical_calculations.html#Determining-Theoretical-Yield","page":"Chemical Calculations","title":"Determining Theoretical Yield","text":"","category":"section"},{"location":"chemical_calculations/chemical_calculations.html","page":"Chemical Calculations","title":"Chemical Calculations","text":"Similarly if we want to calculate the theoretical yield of AlCl3 in the above reaction we can do the following:","category":"page"},{"location":"chemical_calculations/chemical_calculations.html","page":"Chemical Calculations","title":"Chemical Calculations","text":"theoretical_yield(rx,[2.80,4.15],AlCl3) # theoretical yield in grams","category":"page"},{"location":"chemical_calculations/chemical_calculations.html#Calculating-Molar-Ratios-in-a-Reaction","page":"Chemical Calculations","title":"Calculating Molar Ratios in a Reaction","text":"","category":"section"},{"location":"chemical_calculations/chemical_calculations.html","page":"Chemical Calculations","title":"Chemical Calculations","text":"We can calculate the molar ratios of two species involved in the reaction. If we want to calcuate the molar ratio of Al and AlCl3 in the above reaction, we can do the following:","category":"page"},{"location":"chemical_calculations/chemical_calculations.html","page":"Chemical Calculations","title":"Chemical Calculations","text":"molar_ratio(rx,Al,AlCl3)","category":"page"},{"location":"chemical_calculations/chemical_calculations.html#Calculating-Number-of-moles","page":"Chemical Calculations","title":"Calculating Number of moles","text":"","category":"section"},{"location":"chemical_calculations/chemical_calculations.html","page":"Chemical Calculations","title":"Chemical Calculations","text":"We can calculate the number of moles of a given species if we have it's mass. ","category":"page"},{"location":"chemical_calculations/chemical_calculations.html","page":"Chemical Calculations","title":"Chemical Calculations","text":"For example, if we want to determine the number of moles in 95g of MnO2 we can do the following:","category":"page"},{"location":"chemical_calculations/chemical_calculations.html","page":"Chemical Calculations","title":"Chemical Calculations","text":"# Define the species and attach metadata\r\n@variables t\r\n@species MnO2(t)\r\n@attach_metadata MnO2\r\nnothing #hide","category":"page"},{"location":"chemical_calculations/chemical_calculations.html","page":"Chemical Calculations","title":"Chemical Calculations","text":"moles_by_mass(MnO2,95)","category":"page"}]
}
