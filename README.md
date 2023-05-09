--> Créer une page Shop
    - UseFetch pour récupérer les produits
    - Afficher les porduits sous forme de grille dans la page -> Composant cardGrid (props un array d'object de produit)
    - ProductCard (composant) (props un object)
    - Au clique d'une card -> on renvoie vers la page de détail d'un produit.
--> Créer une page produit 
    - Et afficher ses données 
    doc : https://nextjs.org/docs/routing/dynamic-routes

--> Finir l'authorisation des routes en créant en hook useAuth et qui permettrait de vérifier si j'ai un token et isLogged à false
    -> On refetch + redirection etc...