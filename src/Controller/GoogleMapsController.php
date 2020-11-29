<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GoogleMapsController extends AbstractController
{
    /**
     * @Route("/google/maps", name="google_maps")
     */
    public function index(): Response
    {
        return $this->render('google_maps/index.html.twig', [
            'controller_name' => 'GoogleMapsController',
        ]);
    }
}
