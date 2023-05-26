import hashlib
import os


# Fonction pour enregistrer un mot de passe
def enregistrer_mot_de_passe(mot_de_passe):
    # Générer un sel aléatoire
    sel = os.urandom(16)

    # Concaténer le sel avec le mot de passe
    mot_de_passe_concatene = sel + mot_de_passe.encode('utf-8')

    # Calculer le condensat du mot de passe concaténé
    condensat = hashlib.sha256(mot_de_passe_concatene).hexdigest()

    # Stocker le sel et le condensat dans votre système de stockage sécurisé
    # Dans cet exemple, nous stockons simplement les valeurs dans des variables
    sel_stocke = sel
    condensat_stocke = condensat

    # Vous pouvez également stocker les valeurs dans une base de données ou un fichier


# Fonction pour vérifier un mot de passe
def verifier_mot_de_passe(mot_de_passe):
    # Récupérer le sel et le condensat stockés
    # Dans cet exemple, nous les récupérons à partir des variables
    sel_stocke = b'\xea\xa5\xc6\xce8\xa6\xcd)\x7f\xf8\x8f\xf1,\xd7\xc1\xa4'
    condensat_stocke = 'f02c8eabf3be859b4de91a4ab01a9e9443729486a774769e8242d478a3042d39'

    # Concaténer le sel stocké avec le mot de passe entré
    mot_de_passe_concatene = sel_stocke + mot_de_passe.encode('utf-8')

    # Calculer le condensat du mot de passe concaténé
    condensat = hashlib.sha256(mot_de_passe_concatene).hexdigest()

    # Vérifier si le condensat calculé correspond au condensat stocké
    if condensat == condensat_stocke:
        print("Mot de passe correct.")
    else:
        print("Mot de passe incorrect.")


# Exemple d'utilisation
mot_de_passe_enregistre = "mon_mot_de_passe_securise"
enregistrer_mot_de_passe(mot_de_passe_enregistre)

# Demande de mot de passe à vérifier
mot_de_passe_verifier = input("Veuillez entrer le mot de passe à vérifier : ")
verifier_mot_de_passe(mot_de_passe_verifier)
