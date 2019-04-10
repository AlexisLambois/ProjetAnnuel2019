package com.urbilog.rgaa.core.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.urbilog.rgaa.core.entity.Enregistrement;

/**
 * The Interface ICommandePartEntDAO.
 */
@Repository
public interface IEnregistrementDAO extends JpaRepository<Enregistrement, Integer> {
	
	String UPDATE_COMMENT = "UPDATE Enregistrement enregi SET enregi.comment = :filePath WHERE enregi.id = :id";

	@Transactional
	@Modifying
	@Query(UPDATE_COMMENT)
	void updateComment(@Param("id") Integer id, @Param("filePath") String filePath);

	
}
