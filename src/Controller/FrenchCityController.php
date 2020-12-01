<?php

namespace App\Controller;

use App\Entity\VillesFranceFree;
use App\Repository\VillesFranceFreeRepository;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FrenchCityController extends AbstractController
{
    /**
     * @Route("/french/city/{letters}", name="french_city")
     */
    public function index($letters = null, VillesFranceFreeRepository $repo): JsonResponse
    {

//        $result = $this->getDoctrine()
//            ->getRepository(VillesFranceFree::class)
//            ->createQueryBuilder('e')
//            ->select('e')
//            ->getQuery()
//            ->getResult(\Doctrine\ORM\Query::HYDRATE_ARRAY);
        if($letters == null ){
            $result = $this->getDoctrine()
            ->getRepository(VillesFranceFree::class)
            ->createQueryBuilder('e')
            ->select('e')
            ->getQuery()
            ->getResult(\Doctrine\ORM\Query::HYDRATE_ARRAY);
        } else {
            $result = $repo->findTest($letters);
        }
        return new JsonResponse(['data' => $result]);
    }
}
