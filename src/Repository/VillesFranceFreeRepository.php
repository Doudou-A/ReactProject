<?php

namespace App\Repository;

use App\Entity\VillesFranceFree;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method VillesFranceFree|null find($id, $lockMode = null, $lockVersion = null)
 * @method VillesFranceFree|null findOneBy(array $criteria, array $orderBy = null)
 * @method VillesFranceFree[]    findAll()
 * @method VillesFranceFree[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VillesFranceFreeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, VillesFranceFree::class);
    }

    public function findTest($letter): array
    {
        $entityManager = $this->getEntityManager();
        $result = $entityManager->createQuery(
            "SELECT v
            FROM App\Entity\VillesFranceFree v
            WHERE SUBSTRING_INDEX(SUBSTRING_INDEX(v.villeNom, ' ', 3), ' ', -1) LIKE :letter"
        )->setParameter('letter', $letter.'%');

        return $result->getResult(\Doctrine\ORM\Query::HYDRATE_ARRAY);
    }

    // /**
    //  * @return VillesFranceFree[] Returns an array of VillesFranceFree objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('v.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?VillesFranceFree
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
