package store.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "storetable")
@SequenceGenerator(name = "STORE_SEQ_GENERATOR"
				 , sequenceName = "STORE_SEQ"
				 , initialValue = 1
				 , allocationSize = 1
)
public class StoreDTO {
	@Id //@Id로 설정하면 primary key로 설정된다
	//@GeneratedValue(strategy = GenerationType.AUTO) //특정 데이터베이스에 맞게 자동으로 생성하는 방식, 자동으로 시퀀스 테이블이 생성된다
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "STORE_SEQ_GENERATOR")
	@Column(name="store_seq")
	private int store_seq;
	
	@Column(name="subject", nullable = false, unique = true, length = 30)
	private String subject;
	
	@Column(name="subsubject")
	private String subSubject;
	
	@Column(name="simplecontent")
	private String simpleContent;
	
	@Column(name="content", nullable = false, length = 300)
	private String content;
	
	@Column(name="price", nullable = false, length = 30)
	private String price;
	
	@Column(name="country", nullable = false, length = 30)
	private String country;
	
	@Column(name="img")
	private String img; 
	
	@Column(name="category", nullable = false, length = 30)
	private String category;
	
}
