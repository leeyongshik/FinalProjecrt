package store.bean;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

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
@Table(name = "paytable")
@SequenceGenerator(name = "PAY_SEQ_GENERATOR"
				 , sequenceName = "PAY_SEQ"
				 , initialValue = 1
				 , allocationSize = 1
)
public class PayDTO {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PAY_SEQ_GENERATOR")
	@Column(name = "pay_seq")
	private int pay_seq;
	
	@Column(name="subject", nullable = false, length = 30)
	private String subject;
	
	@Column(name="totalPrice", nullable = false, length = 30)
	private String totalPrice;
	
	@Column(name="orderNumber", nullable = false, length = 30)
	private String orderNumber;
	
	@Column(name="username", nullable = false, length = 30)
	private String userName;
	
}
